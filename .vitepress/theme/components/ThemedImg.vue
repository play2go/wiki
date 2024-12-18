<script setup lang="ts">
import { useData } from 'vitepress'

const props = defineProps<{
  dark: string,
  light: string,
  alt?: string
}>()

const { isDark } = useData()
</script>

<template>
  <img :src="isDark ? dark : light" :alt>
</template>