<template lang="pug">
.footer-address
  p.footer-address__address 600016, Владимирская область, г.&nbsp;Владимир, ул.&nbsp;Большая&nbsp;Нижегородская, д.&nbsp;79
  p.footer-address__work-time
    | Время работы:
    br
    | пн–пт с 9:00 до 18:00
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.footer-address__address {
  padding: 0;
  margin: 0;
  margin-bottom: 16px;

  font-size: 16px;
  line-height: 24px;

  @include mobile {
    font-size: 14px;
    line-height: 20px;
  }
}

.footer-address__work-time {
  padding: 0;
  margin: 0;

  font-size: 16px;
  line-height: 24px;

  @include mobile {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
