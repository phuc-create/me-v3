# ---- Build Stage ----
FROM node:20-alpine AS builder

WORKDIR /app

# copy necessary dependencies
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# install dependencies
RUN npm install

# Copy toàn bộ code
COPY . .

# build project (create folder .next, public, v.v)
RUN npm run build

# ---- Production Stage ----
FROM node:20-alpine AS runner

WORKDIR /app

# copy necessary files to start the app (do not copy everything, just what Next need)
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
# if we have next.config.js, thêm dòng này
COPY --from=builder /app/next.config.js ./next.config.js

ENV NODE_ENV=production
ENV PORT=9999

EXPOSE 9999

CMD ["npm", "start"]
