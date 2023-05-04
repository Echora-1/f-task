<template>
  <nav class="home-nav">
    <router-link :to="RouteEnum.favorites.path">
      <IconFavorite />
      <span>Избранное</span>
    </router-link>
  </nav>
</template>

<script setup>
import IconFavorite from '@/components/icon/IconFavorite.vue'
import { RouteEnum } from '@/router/routerConfig'
</script>

<style scoped>
.home-nav a {
  color: var(--inverted-text-color);
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  transition: opacity 0.3s;
}

.home-nav a span {
  @media (max-width: 767px) {
    display: none;
  }
}

.home-nav a:hover {
  opacity: 0.7;
}

.home-nav a svg {
  margin-right: 9px;
}
</style>
