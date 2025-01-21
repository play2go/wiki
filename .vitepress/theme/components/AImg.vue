<script setup lang="ts">
import { inBrowser } from 'vitepress';
import { ref, watch } from 'vue';

const props = defineProps<{
  src: string;
  alt?: string;
}>();

const open = ref(false);

watch(open, (open) => {
  if (inBrowser) {
    document.body.style.overflow = open ? 'hidden' : '';
  }
});
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    @click="open = true"
    class="cursor-zoom-in outline-(transparent 1px solid) hover:outline-brand-main transition-all"
  />
  <Teleport to="body">
    <transition name="fade">
      <div
        v-if="open"
        class="fixed z-100 top-0 bottom-0 left-0 right-0 w-100% h-100% flex items-center justify-center bg-black/75 backdrop-blur-sm cursor-zoom-out"
        @click="open = false"
      >
        <transition name="zoom">
          <img :src="src" :alt="alt" class="max-h-[90vh] max-w-[90vw]" />
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
  img {
    transition: all 0.2s ease-in-out;
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  img {
    transform: scale(.9);
  }
}
</style>