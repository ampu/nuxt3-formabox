<template lang="pug">
section.tech
  .tech__container
    img.tech__icon(src="~/assets/images/tech-icon.png" width="146" height="135")
    h2.tech__title Технологии и производство
    p.tech__text Для оперативного выполнения заказов любого масштаба мы располагаем двумя гофроагрегаторами. Производственная линия оснащена новейшим оборудованием Cangzhou Zhenxing Packaging&nbsp;Machinery&nbsp;Co

  TechControls(v-model:activeIndex="activeIndex")
  TechTabs(v-model:activeIndex="activeIndex")

  TechPoints
</template>

<script lang="ts" setup>
const activeIndex = ref(0)
</script>

<style lang="scss">
.tech {
  @include container;
  @include padding;
  margin-top: 130px;

  @include desktop {
    margin-top: 80px;
  }

  @include notebook {
    margin-top: 95px;
  }

  @include tablet {
    margin-top: 120px;
  }

  @include mobile {
    margin-top: 70px;
  }
}

.tech__container {
  display: grid;
  align-items: center;
  grid-template-areas:
    "title icon"
    "text  icon";
  grid-template-columns: 1fr auto;

  @include mobile {
    grid-template-areas:
      "title icon"
      "text  text";
  }
}

.tech__icon {
  grid-area: icon;
  align-self: center;
  width: 146px;
  height: 135px;
  margin-right: 16px;

  @include notebook {
    width: 115px;
    height: 110px;
  }

  @include tablet {
    align-self: start;
    width: 115px;
    height: 110px;
    margin-right: 0;
  }

  @include mobile {
    align-self: start;
    width: 58px;
    height: 54px;
    margin-right: 14px;
  }
}

.tech__title {
  grid-area: title;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;

  font-size: 44px;
  line-height: 44px;
  font-weight: 500;

  @include notebook {
    font-size: 32px;
    line-height: 32px;
  }

  @include tablet {
    font-size: 32px;
    line-height: 32px;
  }

  @include mobile {
    margin-bottom: 8px;

    font-size: 24px;
    line-height: 32px;
  }
}

.tech__text {
  grid-area: text;
  margin: 0;
  padding: 0;
  width: 930px;
  margin-bottom: 48px;

  font-size: 24px;
  line-height: 32px;

  @include notebook {
    width: auto;
    margin-bottom: 40px;

    font-size: 20px;
    line-height: 28px;
  }

  @include tablet {
    width: auto;
    margin-bottom: 40px;

    font-size: 20px;
    line-height: 28px;
  }

  @include mobile {
    width: auto;
    margin-bottom: 24px;

    font-size: 14px;
    line-height: 20px;
  }
}
</style>
