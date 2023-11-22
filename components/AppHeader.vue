<template lang="pug">
.header
  .header__container
    AppLogo.header__logo
    .header__menus
      MenuUser
      MenuNavigation
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.header {
  position: relative;
  @include container;
}

.header__container {
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 56px;
  @include padding;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
