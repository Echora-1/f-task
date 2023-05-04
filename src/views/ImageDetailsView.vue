<template>
  <BackgroundImageBlock :image="result?.urls?.full">
    <div class="container image-details">
      <BaseText v-if="error" :text="error" class="image-details__text" />
      <BaseText v-if="loading" primary text="Загрузка..." class="image-details__text" />
      <template v-if="!error && !loading">
        <ImageDetailsHeader
          :image="result"
          :is-favorite="isFavorite"
          @toggle-favorite="modifyToggleFavorite"
        />
        <ImageDetailsCard class="image-details__card" :image="result" />
      </template>
    </div>
  </BackgroundImageBlock>
</template>

<script setup>
import { useApi } from '@/composables/useApi'
import { instanceApi } from '@/api'
import { useRoute } from 'vue-router'
import BackgroundImageBlock from '@/components/ui/BackgroundImageBlock.vue'
import ImageDetailsHeader from '@/components/imageDetails/ImageDetailsHeader.vue'
import ImageDetailsCard from '@/components/imageDetails/ImageDetailsCard.vue'
import { useFavorite } from '@/composables/useFavorite'
import { ref } from 'vue'
import BaseText from '@/components/ui/BaseText.vue'

const route = useRoute()
const isFavorite = ref(false)

const { result, callApi, error, loading } = useApi(async () => {
  const res = await instanceApi.get(route.params.id)
  return res.data
})

const { toggleFavorite, isFavoriteImage } = useFavorite()

function modifyToggleFavorite(image) {
  isFavorite.value = !isFavorite.value
  toggleFavorite({
    id: image.id,
    description: image.description,
    urls: { regular: image.urls.regular }
  })
}
isFavorite.value = isFavoriteImage(route.params.id)
callApi()
</script>

<style scoped>
.image-details {
  position: relative;
  z-index: 2;
}

.image-details__card {
  width: calc((100vw - 40px));
  max-width: 100%;
  height: calc((100vw - 30px) / 2);
  max-height: 744px;
  margin-bottom: 102px;

  @media (max-width: 767px) {
    height: calc(100vw / 2 + 40px);
  }
}

.image-details__text {
  text-align: center;
  justify-content: center;
  display: flex;
  padding: 30px 0;
}
</style>
