<template lang="pug">
ul.tech-points
  li.tech-points__point
    SlidersIcon.tech-points__icon
    h3.tech-points__title Автоматизация
    p.tech-points__text Преимущество компании в том, что линия производства полностью автоматическая
  li.tech-points__point
    ClockIcon.tech-points__icon
    h3.tech-points__title Производительность
    p.tech-points__text Наличие двух гофроагрегатов позволяет производить одновременно различные типы профилей
  li.tech-points__point
    CodesandboxIcon.tech-points__icon
    h3.tech-points__title Ассортимент
    p.tech-points__text Наличие автоматического плосковысечного пресса позволяет расширить ассортимент выпускаемой продукции
</template>

<script lang="ts" setup>
import SlidersIcon from '~/assets/icons/sliders.svg?component'
import ClockIcon from '~/assets/icons/clock.svg?component'
import CodesandboxIcon from '~/assets/icons/codesandbox.svg?component'
</script>

<style lang="scss">
.tech-points {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 64px;

  @include desktop {
    margin-top: 80px;
  }

  @include notebook {
    margin-top: 32px;
    grid-template-columns: 1fr;
    gap: 32px;
  }

  @include tablet {
    margin-top: 36px;
    grid-template-columns: 1fr;
    gap: 32px;
  }

  @include mobile {
    margin-top: 40px;
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

.tech-points__point {
  position: relative;
  padding-left: 80px;

  @include mobile {
    padding-left: 48px;
  }
}

.tech-points__icon {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 48px;
  height: 48px;

  @include mobile {
    width: 32px;
    height: 32px;
  }
}

.tech-points__title {
  margin: 0;
  padding: 0;
  display: flex;
  margin-bottom: 12px;

  font-size: 32px;
  line-height: 32px;
  font-weight: 500;

  color: $orange;

  @include desktop {
    font-size: 24px;
    line-height: 24px;
  }

  @include notebook {
    font-size: 24px;
    line-height: 24px;
  }

  @include tablet {
    font-size: 24px;
    line-height: 24px;
  }

  @include mobile {
    font-size: 24px;
    line-height: 24px;
  }
}

.tech-points__text {
  margin: 0;
  padding: 0;
  display: flex;

  font-size: 18px;
  line-height: 24px;

  @include tablet {
    font-size: 16px;
    line-height: 20px;
  }

  @include mobile {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
