<template lang="pug">
section.services#services
  h2.services__title Услуги
  p.services__text Одним из основных видов деятельности нашего предприятия является производство гофрокартона разных марок и профилей

  ServicesPoints
  ServicesItems
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.services {
  @include container;
  @include padding;

  margin-top: 120px;

  @include desktop {
    margin-top: 100px;
  }

  @include notebook {
    margin-top: 64px;
  }

  @include tablet {
    margin-top: 64px;
  }
}

.services__title {
  margin: 0;
  padding: 0;
  display: flex;
  margin-bottom: 16px;

  font-size: 44px;
  line-height: 54px;
  font-weight: 500;

  @include desktop {
    font-size: 44px;
    line-height: 54px;
  }

  @include notebook {
    font-size: 32px;
    line-height: 44px;
  }

  @include tablet {
    font-size: 32px;
    line-height: 44px;
  }

  @include mobile {
    margin-bottom: 8px;

    font-size: 24px;
    line-height: 32px;
  }
}

.services__text {
  margin: 0;
  padding: 0;
  display: flex;
  width: 950px;
  margin-bottom: 64px;

  font-size: 24px;
  line-height: 32px;

  @include desktop {
    width: 950px;
    margin-bottom: 50px;

    font-size: 24px;
    line-height: 32px;
  }

  @include notebook {
    width: 728px;
    margin-bottom: 32px;

    font-size: 20px;
    line-height: 28px;
  }

  @include tablet {
    width: 100%;
    margin-bottom: 32px;

    font-size: 20px;
    line-height: 28px;
  }

  @include mobile {
    width: 100%;
    margin-bottom: 32px;

    font-size: 14px;
    line-height: 20px;
  }
}
</style>
