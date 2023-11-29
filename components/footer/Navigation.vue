<template lang="pug">
ul.footer-navigation
  li.footer-navigation__item(
    v-for="(item, index) in FOOTER_NAVIGATION"
    :key="index"
    :class="{'footer-navigation__item--secondary': item.isSecondary}"
  )
    a(:href="item.href" v-html="item.title")
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.footer-navigation {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  justify-content: space-between;

  font-size: 16px;
  line-height: 16px;
}

.footer-navigation__item {
  &--secondary {
    color: $blackish;
  }
}

.footer-navigation__item a {
  @include link;
}
</style>
