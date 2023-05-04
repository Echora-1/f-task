<template>
  <DecorImageBlock>
    <div class="search-block container">
      <form class="search-block__form" @submit.prevent="searchHandler">
        <BaseInput id="search" placeholder="Поиск" v-model="searchValue">
          <template #suffix>
            <BaseButton clear type="submit" class="search-block__search-btn"
              ><IconSearch
            /></BaseButton>
          </template>
        </BaseInput>
      </form>
    </div>
  </DecorImageBlock>
</template>
<script setup>
import DecorImageBlock from '@/components/ui/DecorImageBlock.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import IconSearch from '@/components/icon/IconSearch.vue'
import { defineEmits, ref } from 'vue'

const emit = defineEmits(['search'])
const searchValue = ref('')

function searchHandler() {
  emit('search', searchValue.value)
}
</script>

<style scoped>
.search-block {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 252px;

  @media (max-width: 767px) {
    min-height: 230px;
  }
}

.search-block__form {
  max-width: 866px;
  width: 100%;
}

.search-block__search-btn {
  padding: 10px 34px;

  @media (max-width: 767px) {
    padding: 10px 25px;
    min-width: 75px;
  }
}
</style>
