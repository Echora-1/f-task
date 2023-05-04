<template>
  <div class="details-image-card">
    <img :src="image?.urls.full" :alt="image?.description" />
    <BaseButton class="details-image-card__fs-btn" clear>
      <IconFullscreen />
    </BaseButton>
  </div>
</template>

<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import IconFullscreen from '@/components/icon/IconFullscreen.vue'

defineProps({
  image: {
    type: Object,
    default: () => {}
  }
})
</script>

<style scoped>
.details-image-card {
  box-shadow: 0 4px 50px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  position: relative;
  display: flex;
  background-color: gray;
}

.details-image-card img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.details-image-card__fs-btn {
  color: #ffffff;
  position: absolute;
  bottom: 23px;
  right: 29px;

  @media (max-width: 767px) {
    bottom: 1px;
    right: 1px;
  }
}

.details-image-card__fs-btn svg {
  width: 20px;
  height: 20px;
}
</style>
