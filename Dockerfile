############################
# 0️⃣ Asset optimization stage (pre-build)
############################
FROM node:20-alpine AS optimizer

WORKDIR /app

RUN apk add --no-cache ffmpeg optipng jpegoptim bash

COPY scripts/ ./scripts/
COPY public/ ./public/

RUN chmod +x scripts/optimize-assets.sh && bash scripts/optimize-assets.sh

############################
# 1️⃣ Base image
############################
FROM node:20-alpine AS base

WORKDIR /app

RUN apk add --no-cache libc6-compat

############################
# 2️⃣ Dependencies stage
############################
FROM base AS deps

COPY package.json ./
RUN npm install

############################
# 3️⃣ Build stage
############################
FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Copy optimized assets from optimizer stage
COPY --from=optimizer /app/public/ ./public/

RUN npm run build

############################
# 4️⃣ Production runner
############################
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN apk add --no-cache libc6-compat

# Create non-root user
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Copy standalone build
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Fix permissions for Next.js image cache
RUN mkdir -p .next/cache && chown -R nextjs:nextjs /app

ENV PORT=8001

EXPOSE 8001

USER nextjs

CMD ["node", "server.js"]
