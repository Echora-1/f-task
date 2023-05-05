<template>
  <router-link :to="RouteEnum.imageDetails.path + image?.id" class="image-card">
    <img :src="image?.urls.regular" :alt="image?.description" />
  </router-link>
</template>

<script setup>
import { RouteEnum } from '@/router/routerConfig'

defineProps({
  image: {
    type: Object,
    default: () => {}
  }
})
</script>

<style scoped>
.image-card {
  transition: transform 0.3s;
  cursor: pointer;
}

.image-card:hover {
  transform: scale(1.01);
}

.image-card img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: gray;
}
</style>
