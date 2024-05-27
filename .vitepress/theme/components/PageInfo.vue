<script setup lang="ts">
import { useData } from "vitepress";
import AuthorEntry from "./AuthorEntry.vue";

const { frontmatter } = useData()
</script>


<template>
  <div class="container lt-xl:mt-4 xl:mb-4">
    <span class="label mb-2">Автор{{ (frontmatter.authors.length == 1) ? '' : 'ы' }} статьи</span>
    <AuthorEntry v-for="author in frontmatter.authors" :username="author" :key="author" />
  </div>
</template>


<style lang="scss" scoped>

.container {

  background-color: var(--vp-c-bg-elv);

  width: auto;
  border-radius: 10px;
  padding: 4px 12px;
  display: flex;
  flex-direction: column;

  .label {
    color: rgba(206, 215, 245, 0.25);
    font-size: 12px;
    //margin-bottom: 6px;
  }
}

</style>