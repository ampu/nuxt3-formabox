<template lang="pug">
.header
  .header__container
    Logo.header__logo
    .header__menus
      MenuUser
      MenuNavigation
  MenuMobile
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.header {
  position: relative;
  @include container;

  background: $black;
  color: $white;
}

.header__container {
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  top: 0;

  @include padding;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 56px;
  padding-top: 20px;
  padding-bottom: 20px;

  @include mobile {
    padding-top: 10px;
    padding-bottom: 10px;
    gap: 0;
  }
}

.header__menus {
  display: flex;
  flex-flow: column;
}

.header__logo {
  flex-shrink: 0;
  width: 137px;
  height: 79px;

  @include tablet {
    width: 110px;
    height: 63px;
  }

  @include mobile {
    width: 69px;
    height: 40px;
  }
}
</style>
