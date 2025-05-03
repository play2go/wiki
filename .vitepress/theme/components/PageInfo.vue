<script setup lang="ts">
import { useData } from "vitepress";
import AuthorEntry from "./AuthorEntry.vue";

const { frontmatter } = useData()
</script>

<template>
  <div class="flex bg-[var(--vp-c-bg-elv)] border border-solid border-[var(--vp-c-divider)] max-w-[250px] rounded-lg py-2 px-3 flex flex-col gap-2">
    <span class="text-[var(--vp-c-text-2)] text-xs font-semibold mb-1">Автор{{ (frontmatter.authors.length == 1) ? '' : 'ы' }} статьи</span>
    <AuthorEntry v-for="author in frontmatter.authors" :username="author" :key="author" />
  </div>
</template>