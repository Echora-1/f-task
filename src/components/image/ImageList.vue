<template>
  <div class="image-list">
    <div class="container">
      <p v-if="title" class="image-list__title">{{ title }}</p>
      <BaseText v-if="error" class="image-list__text" :text="error" error />
      <BaseText v-if="loading" class="image-list__text" text="Загрузка..." />
      <BaseText
        v-if="!loading && !error && !images.length"
        class="image-list__text"
        text="Изображения отсутствуют"
      />
      <div v-if="images.length" :class="['image-list__wrap', { 'image-list__wrap--title': title }]">
        <image-card
          class="image-list__card"
          v-for="(image, index) in images"
          :image="image"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ImageCard from '@/components/image/ImageCard.vue'
import BaseText from '@/components/ui/BaseText.vue'

defineProps({
  title: {
    type: String,
    default: ''
  },

  images: {
    type: Array,
    default: () => []
  },

  error: {
    type: String,
    default: ''
  },

  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 200px;
}

.image-list {
  border-top: 16px solid #d9d9d9;

  @media (max-width: 767px) {
    border-top: none;
  }
}

.image-list__title {
  font-weight: 700;
  font-size: 72px;
  line-height: 84px;
  margin: 80px 0 0;

  @media (max-width: 767px) {
    margin: 26px 0 0;
    font-size: 36px;
    line-height: 42px;
  }
}

.image-list__wrap {
  padding-top: 100px;
  display: flex;
  gap: 30px;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    padding-top: 106px;
    gap: 22px;
  }
}

.image-list__wrap--title {
  @media (max-width: 767px) {
    padding-top: 56px;
  }
}

.image-list__card {
  width: calc((100% - 60px) / 3);
  height: calc((100vw - 100px) / 3);
  max-height: 440px;

  @media (max-width: 767px) {
    width: 100%;
    height: calc(100vw - 65px);
  }
}

.image-list__text {
  margin: 30px 0;
}
</style>
