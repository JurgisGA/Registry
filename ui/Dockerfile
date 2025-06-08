FROM node:20-alpine
WORKDIR /app
COPY . .
RUN corepack enable && pnpm install && pnpm run build
CMD ["pnpm","run","dev","--","--host"]
