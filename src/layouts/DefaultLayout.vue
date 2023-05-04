<template>
  <BaseHeader class="default-layout">
    <template #logo>
      <IconLogo class="default-layout__logo" />
    </template>
    <template #nav>
      <DefaultNav />
    </template>
  </BaseHeader>
  <main>
    <slot></slot>
  </main>
</template>

<script setup>
import BaseHeader from '@/components/ui/BaseHeader.vue'
import IconLogo from '@/components/icon/IconLogo.vue'
import DefaultNav from '@/components/default/DefaultNav.vue'
</script>

<style scoped>
.default-layout {
  min-height: 80px;
}

.default-layout__logo {
  width: 112px;
  height: 44px;

  @media (max-width: 767px) {
    width: 84px;
    height: 33px;
  }
}
</style>
