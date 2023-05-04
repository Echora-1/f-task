<template>
  <section>
    <SearchBlock @search="searchImage" />
    <ImageList :images="result" :error="error" :loading="loading" />
  </section>
</template>
<script setup>
import SearchBlock from '@/components/widgets/SearchBlock.vue'
import ImageList from '@/components/image/ImageList.vue'
import { useApi } from '@/composables/useApi'
import { instanceApi } from '@/api'

const COUNT = 8

const { query, result, callApi, error, loading } = useApi(async (query) => {
  const res = await instanceApi.get(`random?count=${COUNT}&query=${query}`)
  return res.data
})

function searchImage(value) {
  if (value) {
    result.value = []
    query.value = value
    callApi()
  }
}

callApi()
</script>
