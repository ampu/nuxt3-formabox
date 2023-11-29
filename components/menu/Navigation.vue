<template lang="pug">
ul.menu-navigation
  li.menu-navigation__item(
    v-for="(item, index) in HEADER_NAVIGATION"
    :key="index"
  )
    a(:href="item.href" v-html="item.title")
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.menu-navigation {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 56px;

  @include notebook {
    gap: 48px;
  }

  @include tablet {
    display: none;
  }

  @include mobile {
    display: none;
  }
}

.menu-navigation a {
  @include link;

  font-size: 20px;
  line-height: 24px;

  @include notebook {
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
