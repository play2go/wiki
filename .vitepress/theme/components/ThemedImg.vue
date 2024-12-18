<script setup lang="ts">
import {inBrowser, useData} from 'vitepress'
import {computed} from "vue";

const props = defineProps<{
  dark: string,
  light: string,
  alt?: string
}>()

const { isDark } = useData()
</script>

<template>
  <ClientOnly>
    <img :src="isDark ? dark : light" :alt>
  </ClientOnly>
</template>