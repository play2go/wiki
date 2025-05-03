<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps<{
  username: string;
}>();

const avatarUrl = ref<string | null>(null);

const fetchAvatar = async () => {
  const cacheKey = `github-avatar-${props.username}`;
  const cachedData = sessionStorage.getItem(cacheKey);

  if (cachedData) {
    avatarUrl.value = cachedData;
  } else {
    try {
      const response = await fetch(`https://api.github.com/users/${props.username}`);
      const data = await response.json();
      if (data.avatar_url) {
        avatarUrl.value = data.avatar_url;
        sessionStorage.setItem(cacheKey, data.avatar_url);
      }
    } catch (error) {
      console.error("Failed to fetch GitHub avatar:", error);
    }
  }
};

onMounted(fetchAvatar);
</script>

<template>
  <div class="flex items-center mb-1.5 overflow-auto">
    <template v-if="avatarUrl">
      <img 
        :src="avatarUrl" 
        alt="avatar" 
        class="w-[30px] h-[30px] rounded-full mr-2"
      />
      <a 
        class="underline text-base hover:no-underline" 
        :href="`https://github.com/${username}`" 
        target="_blank"
      >
        {{ username }}
      </a>
    </template>
    <template v-else>
      <span>{{ username }}</span>
    </template>
  </div>
</template>