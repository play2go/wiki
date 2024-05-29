<script setup lang="ts">
import { useData } from "vitepress";
import AuthorEntry from "./AuthorEntry.vue";

const { frontmatter } = useData()
</script>


<template>
  <div class="container">
    <span class="label mb-2">Автор{{ (frontmatter.authors.length == 1) ? '' : 'ы' }} статьи</span>
    <AuthorEntry v-for="author in frontmatter.authors" :username="author" :key="author" />
  </div>
</template>


<style lang="scss" scoped>

.container {

  background-color: var(--vp-c-bg-elv);

  width: auto;
  max-width: 250px;
  border-radius: 10px;
  padding: 4px 12px;
  display: flex;
  flex-direction: column;

  .label {
    color: var(--vp-c-text-3);
    font-size: 12px;
  }
}

</style>