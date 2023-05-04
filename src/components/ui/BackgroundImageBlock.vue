<template>
  <div class="background-image-wrap">
    <div class="background-image" :style="image ? `background-image: url(${image});` : ''"></div>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.background-image-wrap {
  position: relative;
}

.background-image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  background-color: gray;
  height: 744px;
  right: 0;
  left: 0;
  top: 0;
  z-index: 1;
  position: absolute;

  @media (max-width: 767px) {
    display: none;
  }
}

.background-image::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  filter: grayscale(100%);
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: -1;

  @media (max-width: 767px) {
    display: none;
  }
}
</style>
