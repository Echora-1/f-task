<template>
  <div class="details-info">
    <img :src="user?.profile_image.large" alt="avatar" width="55" height="55" />
    <div>
      <p class="details-info__name">{{ user?.name }}</p>
      <p class="details-info__username">@{{ user?.username }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  user: {
    type: Object,
    default: () => {}
  }
})
</script>

<style scoped>
.details-info {
  display: flex;
  color: #f2f2f2;
  align-items: center;

  @media (max-width: 767px) {
    color: var(--text-color);
  }
}

.details-info img {
  border: 1px solid var(--background-color);
  border-radius: 8px;
  background-color: var(--background-color);
  margin-right: 10px;

  @media (max-width: 767px) {
    width: 48px;
    height: 48px;
  }
}

.details-info p {
  margin: 0;
}

.details-info__name {
  font-size: 30px;
  line-height: 35px;

  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 21px;
  }
}

.details-info__username {
  font-size: 18px;
  line-height: 21px;
  @media (max-width: 767px) {
    color: #bdbdbd;
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
