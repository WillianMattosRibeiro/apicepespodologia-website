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

COPY apicepes-landing/package.json ./
COPY apicepes-landing/package-lock.json* ./

RUN npm install --frozen-lockfile || npm install

############################
# 3️⃣ Build stage
############################
FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY apicepes-landing/. ./

# Copy original brand assets into public/images
RUN mkdir -p public/images && \
    cp -r /app/../apicepespodologia/assets/img/* public/images/ 2>/dev/null || true && \
    cp -r /app/../apicepespodologia/assets/img/imagens/* public/images/ 2>/dev/null || true

RUN npm run build

############################
# 4️⃣ Production runner
############################
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

RUN apk add --no-cache libc6-compat

# Copy standalone build
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

ENV PORT=8080

EXPOSE 8080

CMD ["node", "server.js"]
