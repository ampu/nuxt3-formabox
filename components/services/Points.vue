<template lang="pug">
ul.services-points
  li.services-points__point
    ClockIcon.services-points__icon
    h3.services-points__title Сроки
    p.services-points__text Минимальные сроки выполнения заказов
  li.services-points__point
    CheckCircleIcon.services-points__icon
    h3.services-points__title Качество
    p.services-points__text Тонкая настройка нужного вам качества
  li.services-points__point
    StarIcon.services-points__icon
    h3.services-points__title Эффективность
    p.services-points__text Высокая ценность продукции при оптимальной цене
</template>

<script lang="ts" setup>
import ClockIcon from '~/assets/icons/clock.svg?component'
import CheckCircleIcon from '~/assets/icons/check-circle.svg?component'
import StarIcon from '~/assets/icons/star.svg?component'
</script>

<style lang="scss">
.services-points {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @include notebook {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  @include tablet {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  @include mobile {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

.services-points__point {
  position: relative;
  padding-left: 80px;

  @include desktop {
    padding-left: 64px;
  }

  @include notebook {
    padding-left: 62px;
  }

  @include tablet {
    padding-left: 62px;
  }

  @include mobile {
    padding-left: 48px;
  }
}

.services-points__icon {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 48px;
  height: 48px;

  @include desktop {
    top: -8px;
  }

  @include mobile {
    width: 32px;
    height: 32px;
  }
}

.services-points__title {
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
    margin-bottom: 8px;

    font-size: 24px;
    line-height: 24px;
  }
}

.services-points__text {
  margin: 0;
  padding: 0;
  display: flex;

  font-size: 18px;
  line-height: 24px;

  @include tablet {
    font-size: 18px;
    line-height: 24px;
  }

  @include mobile {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
