<template>
  <div class="details-header">
    <ImageDetailsInfo :user="image?.user" />
    <div class="details-header__actions">
      <FavoriteBtn :is-favorite="isFavorite" @click="toggleFavorite" />
      <a :href="image?.links.download" target="_blank">
        <BaseButton primary class="details-header__download-btn">
          <IconDownload />
          <span>Download</span>
        </BaseButton>
      </a>
    </div>
  </div>
</template>

<script setup>
import ImageDetailsInfo from '@/components/imageDetails/ImageDetailsInfo.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import IconDownload from '@/components/icon/IconDownload.vue'
import FavoriteBtn from '@/components/widgets/FavoriteBtn.vue'
import { defineEmits } from 'vue'

const props = defineProps({
  image: {
    type: Object,
    default: () => {}
  },
  isFavorite: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggleFavorite'])
function toggleFavorite() {
  emit('toggleFavorite', props.image)
}
</script>

<style scoped>
.details-header {
  padding: 44px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 767px) {
    padding: 40px 0 32px;
  }
}

.details-header__actions {
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 767px) {
    gap: 16px;
  }
}

.details-header__download-btn {
  min-width: 206px;
  padding: 13px 23px;

  @media (max-width: 767px) {
    min-width: 41px;
    padding: 9px;
  }
}

.details-header__download-btn span {
  @media (max-width: 767px) {
    display: none;
  }
}

.details-header__download-btn svg {
  margin-right: 16px;

  @media (max-width: 767px) {
    margin-right: 0;
    width: 21px;
    height: 18px;
  }
}
</style>
