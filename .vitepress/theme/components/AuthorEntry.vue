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
  <div class="user">
    <template v-if="avatarUrl">
      <img :src="avatarUrl" alt="avatar" class="avatar" />
      <a class="link" :href="`https://github.com/${username}`" target="_blank">{{ username }}</a>
    </template>
    <template v-else>
      <span>{{ username }}</span>
    </template>
  </div>
</template>

<style lang="scss">
.user {
  align-items: center;
  display: flex;
  margin-bottom: 6px;
  overflow: auto;

  .link {
    text-decoration: underline;
    font-size: 16px;
  }

  .avatar {
    width: 30px;
    border-radius: 30px;
    margin-right: 8px;
  }
}
</style>
