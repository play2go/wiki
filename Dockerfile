FROM oven/bun:1.2.5 AS base
WORKDIR /app

FROM base AS deps
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM base AS production
COPY --from=build /app/.vitepress/dist ./dist
EXPOSE 4173
WORKDIR /app
CMD ["bun", "run preview --host 0.0.0.0"]

