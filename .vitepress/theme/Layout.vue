<script setup>
import DefaultTheme from 'vitepress/theme'
import PageInfo from "./components/PageInfo.vue";
import {useData} from "vitepress";
import { useWindowSize } from '@vueuse/core'


const { width, height } = useWindowSize()

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>

    <template #sidebar-nav-before >
      <PageInfo v-if="frontmatter['authors'] && width < 1280" class="lt-hidesidebar:mb-4 hidesidebar:mt-4" />
    </template>

    <template #aside-outline-before >
      <PageInfo v-if="frontmatter['authors'] && width >= 1280" class="mb-4" />
    </template>

  </Layout>
</template>

<style scoped>

</style>