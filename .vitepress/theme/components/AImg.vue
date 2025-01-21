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
  <ClientOnly>
    <img
      :src="src"
      :alt="alt"
      @click="open = true"
      class="cursor-zoom-in hover:scale-105 hover:shadow transition-all duration-300"
    />
    <Teleport to="body">
      <transition name="fade">
        <div
          v-if="open"
          class="fixed z-100 top-0 bottom-0 left-0 right-0 w-100% h-100% flex items-center justify-center bg-black/60 cursor-zoom-out"
          @click="open = false"
        >
          <img :src="src" :alt="alt" />
        </div>
      </transition>
    </Teleport>
  </ClientOnly>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>