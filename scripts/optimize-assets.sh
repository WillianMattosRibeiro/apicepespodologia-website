#!/bin/bash
# ============================================================
# Pre-build Optimization Script — Ápice Pés Podologia
# ============================================================
# Compresses images and videos before Next.js build.
# Designed to run in Alpine-based Docker builds.
# ============================================================
set -uo pipefail
# NOT using set -e: compression tools like optipng return
# non-zero exit codes for files they can't improve (not errors).

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PUBLIC_DIR="$ROOT_DIR/public"
IMAGES_DIR="$PUBLIC_DIR/images"
VIDEOS_DIR="$PUBLIC_DIR/videos"

# ── Portable logging ──
log()  { printf "\033[1;34m[INFO]\033[0m %s\n" "$*"; }
ok()   { printf "\033[1;32m  ✓\033[0m %s\n" "$*"; }
skip() { printf "\033[1;33m  -\033[0m %s\n" "$*"; }
warn() { printf "\033[1;33m  ⚠\033[0m %s\n" "$*"; }

has_cmd() { command -v "$1" &>/dev/null; }

file_size() { wc -c < "$1" 2>/dev/null | tr -d ' '; }
bytes_to_mb() { echo "$(( $1 / 1024 / 1024 ))"; }
bytes_to_kb() { echo "$(( $1 / 1024 ))"; }

# ── Check actual file type via magic bytes (not extension) ──
is_real_png() {
  local header
  header=$(dd if="$1" bs=1 count=8 2>/dev/null | od -A n -t x1 | tr -d ' \n')
  [ "$header" = "89504e470d0a1a0a" ]
}

is_real_jpeg() {
  local header
  header=$(dd if="$1" bs=1 count=2 2>/dev/null | od -A n -t x1 | tr -d ' \n')
  [ "$header" = "ffd8" ]
}

# ── Restore from git if file got corrupted ──
restore_corrupted() {
  log "━━━ Checking for corrupted images ━━━"
  local corrupted=0
  while IFS= read -r -d '' img; do
    local ext="${img##*.}"
    ext=$(echo "$ext" | tr '[:upper:]' '[:lower:]')

    case "$ext" in
      png)
        if ! is_real_png "$img"; then
          if is_real_jpeg "$img"; then
            warn "$(basename "$img") is actually JPEG — renaming"
            mv "$img" "${img%.png}.jpg"
          else
            # Corrupted — try restoring from git
            warn "$(basename "$img") is corrupted — restoring from git"
            (cd "$ROOT_DIR" && git checkout -- "public/images/$(basename "$img")" 2>/dev/null) || true
          fi
          corrupted=$((corrupted + 1))
        fi
        ;;
      jpg|jpeg)
        if ! is_real_jpeg "$img"; then
          warn "$(basename "$img") is corrupted — restoring from git"
          (cd "$ROOT_DIR" && git checkout -- "public/images/$(basename "$img")" 2>/dev/null) || true
          corrupted=$((corrupted + 1))
        fi
        ;;
    esac
  done < <(find "$IMAGES_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) -print0 2>/dev/null)
  log "  → $corrupted corrupted files restored/renamed"
}

# ──────────────────────────────────────
# 1. VIDEO COMPRESSION (ffmpeg)
# ──────────────────────────────────────
compress_videos() {
  log "━━━ Compressing Videos ━━━"

  if ! has_cmd ffmpeg; then
    skip "ffmpeg not installed — skipping"
    return
  fi
  if [ ! -d "$VIDEOS_DIR" ]; then
    skip "videos directory not found"
    return
  fi

  while IFS= read -r -d '' video; do
    local basename size_before size_after
    basename="$(basename "$video")"
    size_before="$(file_size "$video")"
    [ -z "${size_before:-}" ] && continue

    log "  Compressing: $basename ($(bytes_to_mb "$size_before")MB)"

    ffmpeg -y -i "$video" \
      -c:v libx264 -preset medium -crf 28 \
      -movflags +faststart -c:a aac -b:a 96k \
      "${video}.compressed.mp4" 2>/dev/null || true

    if [ -f "${video}.compressed.mp4" ]; then
      size_after="$(file_size "${video}.compressed.mp4")"
      if [ "${size_after:-0}" -gt 0 ] && [ "$size_after" -lt "$(( size_before * 90 / 100 ))" ]; then
        mv "${video}.compressed.mp4" "$video"
        ok "$basename: $(bytes_to_mb "$size_before")MB → $(bytes_to_mb "$size_after")MB"
      else
        rm -f "${video}.compressed.mp4"
        skip "$basename: already optimal"
      fi
    fi
  done < <(find "$VIDEOS_DIR" -type f -name "*.mp4" -size +1024k -print0 2>/dev/null)
}

# ──────────────────────────────────────
# 2. JPEG COMPRESSION (jpegoptim)
#    Skip files < 20KB (already tiny)
# ──────────────────────────────────────
compress_jpeg() {
  log "━━━ Compressing JPEG Images ━━━"

  if ! has_cmd jpegoptim; then
    skip "jpegoptim not installed — skipping"
    return
  fi
  if [ ! -d "$IMAGES_DIR" ]; then
    skip "images directory not found"
    return
  fi

  while IFS= read -r -d '' img; do
    local before after
    before="$(file_size "$img")"
    [ -z "${before:-}" ] && continue

    # Skip tiny files (< 20KB)
    if [ "$before" -lt 20480 ]; then
      skip "$(basename "$img"): too small (skip)"
      continue
    fi

    jpegoptim --strip-all --all-progressive --max=85 "$img" 1>/dev/null 2>&1 || true
    after="$(file_size "$img")"
    if [ "${after:-0}" -gt 0 ] && [ "$after" -lt "$before" ]; then
      ok "$(basename "$img"): $(bytes_to_kb "$before")KB → $(bytes_to_kb "$after")KB"
    fi
  done < <(find "$IMAGES_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) -print0 2>/dev/null)
}

# ──────────────────────────────────────
# 3. PNG COMPRESSION (optipng)
#    - Only process actual PNG files (check magic bytes)
#    - Skip files < 20KB (already tiny)
# ──────────────────────────────────────
compress_png() {
  log "━━━ Compressing PNG Images ━━━"

  if ! has_cmd optipng; then
    skip "optipng not installed — skipping"
    return
  fi
  if [ ! -d "$IMAGES_DIR" ]; then
    skip "images directory not found"
    return
  fi

  while IFS= read -r -d '' img; do
    local before after
    before="$(file_size "$img")"
    [ -z "${before:-}" ] && continue

    # Skip non-PNG files misnamed as .png
    if ! is_real_png "$img"; then
      warn "$(basename "$img"): not a real PNG — skipping"
      continue
    fi

    # Skip tiny files (< 20KB)
    if [ "$before" -lt 20480 ]; then
      skip "$(basename "$img"): too small (skip)"
      continue
    fi

    optipng -o3 -quiet "$img" || true
    after="$(file_size "$img")"
    if [ "${after:-0}" -gt 0 ] && [ "$after" -lt "$before" ]; then
      ok "$(basename "$img"): $(bytes_to_kb "$before")KB → $(bytes_to_kb "$after")KB"
    fi
  done < <(find "$IMAGES_DIR" -type f -name "*.png" -print0 2>/dev/null)
}

# ──────────────────────────────────────
# 4. REMOVE UNUSED VIDEOS
# ──────────────────────────────────────
remove_unused_videos() {
  log "━━━ Removing Unused Asset Videos ━━━"

  if [ ! -d "$VIDEOS_DIR" ]; then
    skip "videos directory not found"
    return
  fi

  local video kept=0 removed=0
  for video in "$VIDEOS_DIR"/*.mp4; do
    [ -f "$video" ] || continue
    local basename
    basename="$(basename "$video")"
    case "$basename" in
      apresentacao-apicepes-podologia.mp4)
        ok "Keeping: $basename"
        kept=$(( kept + 1 ))
        ;;
      *)
        rm -f "$video"
        ok "Removed unused: $basename"
        removed=$(( removed + 1 ))
        ;;
    esac
  done
  log "  → $kept kept, $removed removed"
}

# ──────────────────────────────────────
# MAIN
# ──────────────────────────────────────
log "═══════════════════════════════════════════"
log "  Ápice Pés — Asset Optimization Script"
log "═══════════════════════════════════════════"

remove_unused_videos
compress_videos
restore_corrupted
compress_jpeg
compress_png
restore_corrupted  # run again after compression to catch any new corruptions

log ""
log "✅ Optimization complete!"
