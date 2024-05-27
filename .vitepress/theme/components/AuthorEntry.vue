<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  username: string
}>()

const avatarUrl = ref(null)

fetch(`https://api.github.com/users/${props.username}`)
  .then(resp => resp.json())
  .then(link => avatarUrl.value = link['avatar_url'])
  .catch(console.log)
</script>

<template>
  <div class="user">
    <template v-if="avatarUrl">
      <img :src="avatarUrl" alt="avatar" class="avatar">
      <a class="link" :href="`https://github.com/${username}`">{{username}}</a>
    </template>
    <template v-else>
      <span>{{username}}</span>
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