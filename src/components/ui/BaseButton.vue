<template>
  <button
    :class="['base-button', { 'base-button--clear': clear, 'base-button--primary': primary }]"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  clear: {
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
.base-button {
  border: none;
  background: var(--inverted-text-color);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px;
  line-height: 23px;
  cursor: pointer;
  min-height: 49px;

  @media (max-width: 767px) {
    min-height: 41px;
    min-width: 41px;
    padding: 9px;
  }
}

.base-button:active {
  opacity: 0.85;
  transform: translateY(1px);
}

.base-button--clear {
  box-shadow: none;
  background: transparent;
  border-radius: 0;
}

.base-button--primary {
  background-color: var(--primary-color);
}
</style>
