<template>
  <section>
    <image-list :images="images" title="Избранное" />
  </section>
</template>
<script setup>
import ImageList from '@/components/image/ImageList.vue'
import { useFavorite } from '@/composables/useFavorite'
const { getFavoriteImage } = useFavorite()

const images = getFavoriteImage()
</script>
