<template>
  <p
    :class="[
      'base-text',
      {
        'image-list__error': error,
        'image-list__inverted': inverted,
        'image-list__primary': primary
      }
    ]"
  >
    {{ text }}
  </p>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  },
  error: {
    type: Boolean,
    default: false
  },
  inverted: {
    type: Boolean,
    default: false
  },
  primary: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.base-text {
  font-weight: 700;
  font-size: 44px;
  line-height: 54px;
  text-align: center;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 36px;
    line-height: 42px;
  }
}

.image-list__error {
  color: var(--error-color);
}

.image-list__inverted {
  color: var(--inverted-text-color);
}

.image-list__primary {
  color: var(--primary-color);
}
</style>
