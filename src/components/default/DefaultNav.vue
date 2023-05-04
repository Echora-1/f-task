<template>
  <nav class="default-nav">
    <router-link :to="RouteEnum.home.path">
      <IconSearch />
      <span> Поиск</span>
    </router-link>
    <router-link :to="RouteEnum.favorites.path">
      <IconFavorite />
      <span> Избранное </span>
    </router-link>
  </nav>
</template>

<script setup>
import IconFavorite from '@/components/icon/IconFavorite.vue'
import { RouteEnum } from '@/router/routerConfig'
import IconSearch from '@/components/icon/IconSearch.vue'
</script>

<style scoped>
.default-nav {
  display: flex;
  align-items: center;
  gap: 38px;

  @media (max-width: 767px) {
    gap: 20px;
  }
}

.default-nav a {
  color: var(--inverted-text-color);
  line-height: 23px;
  display: flex;
  align-items: center;
  transition: opacity 0.3s;
}

.default-nav a span {
  @media (max-width: 767px) {
    display: none;
  }
}

.default-nav a:hover {
  opacity: 0.7;
}

.default-nav a svg {
  margin-right: 9px;
}
</style>
