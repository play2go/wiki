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
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/.vitepress/dist ./.vitepress/dist
COPY --from=build /app/.vitepress/config.ts ./.vitepress/config.ts
COPY --from=build /app/src ./src
COPY --from=build /app/package.json ./
COPY --from=build /app/uno.config.ts ./
EXPOSE 4173
WORKDIR /app
CMD ["sh", "-c", "bun run preview --host 0.0.0.0"]