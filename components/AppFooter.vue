<template lang="pug">
.footer
  .footer__container
    AppLogo.footer__logo
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.footer {
  background-color: $ivory;
}

.footer__container {
  @include container;
  @include padding;
}

.footer__logo {
  color: $orange;
}
</style>
