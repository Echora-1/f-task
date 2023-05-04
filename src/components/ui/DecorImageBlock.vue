<template>
  <div class="decor-block">
    <slot></slot>
  </div>
</template>

<style scoped>
.decor-block {
  background-image: url('@/assets/images/ui/DecorBlock/decorBg.png');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;

  @media (max-width: 767px) {
    background-image: url('@/assets/images/ui/DecorBlock/decorBgMb.png');
  }
}

@media (min-resolution: 2dppx) {
  .decor-block {
    background-image: url('@/assets/images/ui/DecorBlock/decorBg@2x.png');

    @media (max-width: 767px) {
      background-image: url('@/assets/images/ui/DecorBlock/decorBgMb@2x.png');
    }
  }
}

.decor-block::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
}
</style>
