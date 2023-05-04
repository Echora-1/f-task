<template>
  <base-button :class="['favorite-btn', { 'favorite-btn--active': isFavorite }]">
    <IconFavoriteActive v-if="isFavorite" />
    <IconFavorite v-else />
  </base-button>
</template>
<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import IconFavorite from '@/components/icon/IconFavorite.vue'
import IconFavoriteActive from '@/components/icon/IconFavoriteActive.vue'

defineProps({
  isFavorite: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.favorite-btn--active {
  color: var(--primary-color);
}

.favorite-btn svg {
  @media (max-width: 767px) {
    width: 20px;
    height: 18px;
  }
}
</style>
