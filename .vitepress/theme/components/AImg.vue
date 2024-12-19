<script setup lang="ts">
import {inBrowser, useData} from 'vitepress'
import {computed, ref, watch} from "vue";

const props = defineProps<{
  src: string
  dark?: string,
  light?: string,
  alt?: string
}>()

const { isDark } = useData()
const open = ref(false)
const imgSrc = computed(() => (isDark.value ? props.dark : props.light) ?? props.src)

watch(open, (open) => {
  if (inBrowser) {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})
</script>

<template>
  <ClientOnly>
    <img :src="imgSrc" :alt @click="open = true" class="cursor-pointer">
    <Teleport to="body">
      <transition name="fade">
        <div v-if="open"
             class="fixed z-100 top-0 bottom-0 left-0 right-0
             w-100% h-100% flex items-center justify-center dark:bg-black/75 bg-black/60"
             @click="open = false"
        >
          <img :src="imgSrc" :alt>
        </div>
      </transition>
    </Teleport>
  </ClientOnly>
</template>

<style lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>