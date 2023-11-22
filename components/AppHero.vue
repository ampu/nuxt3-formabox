<template lang="pug">
.hero
  .hero__container

    Swiper.hero__slider(v-bind="SWIPER_SETTINGS")
      SwiperSlide.hero__slide.hero__slide--first
        .hero__slide-container
          strong.hero__title.hero__title--first Держите ваш бизнес в форме
          a.hero__link(href="#")
            | Подробнее
            MoreIcon
      SwiperSlide.hero__slide.hero__slide--second
        .hero__slide-container
          strong.hero__title.hero__title--second Производство гофрокартона всех типов, марок и профилей для вашего бизнеса
          a.hero__link(href="#")
            | Подробнее
            MoreIcon
      SwiperSlide.hero__slide.hero__slide--third
        .hero__slide-container
          strong.hero__title.hero__title--second Производство гофрокартона всех типов, марок и профилей для вашего бизнеса
          a.hero__link(href="#")
            | Подробнее
            MoreIcon

    .hero__controls
      button.hero__control.hero__control--prev(@click="onPrev")
        .hero__control-inner.hero__control-inner--prev
          span.visually-hidden Prev
          svg.level-svg(width="64" height="64")
            circle.level__ring(r="32")
          BackwardIcon.hero__control-icon
      button.hero__control.hero__control--next(@click="onNext")
        .hero__control-inner.hero__control-inner--next
          span.visually-hidden Next
          svg.level-svg(width="64" height="64")
            circle.level__ring(r="32")
          ForwardIcon.hero__control-icon
</template>

<script lang="ts" setup>
import MoreIcon from '~/assets/icons/more.svg?component'
import BackwardIcon from '~/assets/icons/backward.svg?component'
import ForwardIcon from '~/assets/icons/forward.svg?component'
import type Swiper from 'swiper'

let swiper: Swiper
const currentSlide = ref(0)

const SWIPER_SETTINGS = {
  loop: true,
  onInit(instance: Swiper) {
    swiper = instance
  },
  onActiveIndexChange() {
    currentSlide.value = swiper?.activeIndex ?? 0
  },
}

const onPrev = () => {
  swiper.slidePrev()
}

const onNext = () => {
  swiper.slideNext()
}
</script>

<style lang="scss">
.hero {
  position: relative;
  @include container;
}

.hero__slide {
  &--first {
    background: url('~/assets/images/hero-1.jpg') no-repeat center top / 1680px 808px;
  }

  &--second {
    background: url('~/assets/images/hero-2.jpg') no-repeat center top / 1680px 808px;
  }

  &--third {
    background: url('~/assets/images/hero-3.jpg') no-repeat center top / 1680px 808px;
  }
}

.hero__slide-container {
  @include padding;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}

.hero__title {
  display: flex;
  max-width: 554px;
  margin-bottom: 40px;

  &--first {
    margin-top: 392px;
    font-size: 52px;
    line-height: 64px;
    font-weight: 500;
  }

  &--second {
    margin-top: 400px;
    font-size: 32px;
    line-height: 40px;
    font-weight: 500;
  }
}

.hero__link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 40px;
  margin-bottom: 80px;

  color: inherit;
  background-color: $green;
  border-radius: 100px;
}

.hero__controls {
  position: absolute;
  z-index: 1;
  @include right;
  bottom: 30px;
  display: flex;
  align-items: center;
  gap: 24px;
}

.hero__control {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: 1px solid rgba($white, 0.24);
  border-radius: 50%;
  cursor: pointer;
}

.hero__control-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.hero__control-inner {
  &--prev {
    --level: 0;
  }

  &--next {
    --level: 33.3;
  }

  @include level(64px, 3px);
}

.hero__control .level-svg {
  stroke: $white;
  fill: transparent;
}
</style>
