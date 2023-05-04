<template>
  <div
    :class="[
      'base-input',
      {
        'base-input--focused': focused
      }
    ]"
  >
    <label :for="id" class="base-input__label" v-if="label">
      {{ label }}
    </label>
    <div class="base-input__wrapper">
      <input
        :id="id"
        class="base-input__input"
        v-bind="$attrs"
        :value="modelValue"
        @focus="focusHandler"
        @input="inputHandler"
        @blur="blurHandler"
      />
      <slot name="suffix"> </slot>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

defineProps({
  modelValue: {
    type: String,
    default: ''
  },

  id: {
    type: String,
    default: ''
  },

  label: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])
const focused = ref(false)

function inputHandler(event) {
  emit('update:modelValue', event.target.value)
}

function focusHandler() {
  focused.value = true
}

function blurHandler() {
  focused.value = false
}
</script>

<style scoped>
.base-input {
  width: 100%;
}

.base-input__label {
  font-size: 28px;
  line-height: 32px;
  display: block;
  margin-bottom: 15px;
}

.base-input__wrapper {
  background: var(--inverted-text-color);
  border: 1px solid transparent;
  position: relative;
  display: flex;
}

.base-input__input {
  width: 100%;
  margin: 0;
  border: none;
  outline: none;
  padding: 21px 40px;
  background: transparent;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;

  @media (max-width: 767px) {
    padding: 21px 25px;
  }
}

.base-input__input::placeholder {
  color: inherit;
}
</style>
