<template>
  <header class="default-header">
    <div class="container">
      <router-link :to="RouteEnum.home.path" class="default-header__logo">
        <slot name="logo"></slot>
      </router-link>
      <slot name="nav"></slot>
    </div>
  </header>
</template>

<style scoped>
.default-header {
  background: var(---inverted-background-color);
  display: flex;
  align-items: center;
}

.default-header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
}

.default-header__logo {
  display: flex;
}
</style>

<script setup>
import { RouteEnum } from '@/router/routerConfig'
</script>
