<template>
  <BaseHeader class="home-layout">
    <template #logo>
      <IconLogo class="home-layout__logo" />
    </template>
    <template #nav>
      <HomeNav />
    </template>
  </BaseHeader>
  <main>
    <slot></slot>
    <BaseButton class="home-layout__up-btn" @click="up"><IconArrow /></BaseButton>
  </main>
</template>
<script setup>
import BaseHeader from '@/components/ui/BaseHeader.vue'
import HomeNav from '@/components/home/HomeNav.vue'
import IconLogo from '@/components/icon/IconLogo.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import IconArrow from '@/components/icon/IconArrow.vue'

function up() {
  window.scrollTo(0, 0)
}
</script>

<style scoped>
.home-layout {
  min-height: 148px;

  @media (max-width: 767px) {
    min-height: 70px;
  }
}

.home-layout__logo {
  @media (max-width: 767px) {
    width: 84px;
    height: 33px;
  }
}

.home-layout__up-btn {
  position: fixed;
  bottom: 50px;
  right: 50px;
  min-width: 49px;

  @media (max-width: 767px) {
    display: none;
  }
}
</style>
