<template lang="pug">
ul.services-items
  ServicesItem(
    v-for="(item, index) in SERVICES"
    :key="index"
    v-bind="item"
  )
</template>

<script lang="ts" setup>
import {SERVICES} from '~/utils/services'
</script>

<style lang="scss">
.services-items {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-top: 64px;

  @include desktop {
    margin-top: 88px;
  }

  @include notebook {
    margin-top: 66px;
    gap: 80px 32px;
  }

  @include tablet {
    margin-top: 66px;
    gap: 64px 32px;
  }

  @include mobile {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}
</style>
