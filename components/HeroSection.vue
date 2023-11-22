<template lang="pug">
.hero
  .hero__container
    h1.visually-hidden Формабокс - держите ваш бизнес в форме

    Swiper.hero__slider(v-bind="SWIPER_SETTINGS")
      SwiperSlide.hero__slide.hero__slide--first
        .hero__slide-container
          strong.hero__title.hero__title--first Держите ваш бизнес в&nbsp;форме
          a.hero__link(href="#")
            | Подробнее
            MoreIcon
      SwiperSlide.hero__slide.hero__slide--second
        .hero__slide-container
          strong.hero__title.hero__title--second Производство гофрокартона всех&nbsp;типов, марок и профилей для&nbsp;вашего&nbsp;бизнеса
          a.hero__link(href="#")
            | Подробнее
            MoreIcon
      SwiperSlide.hero__slide.hero__slide--third
        .hero__slide-container
          strong.hero__title.hero__title--second Производство гофрокартона всех&nbsp;типов, марок и профилей для&nbsp;вашего&nbsp;бизнеса
          a.hero__link(href="#")
            | Подробнее
            MoreIcon

    .hero__controls
      .hero__controls-container
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

    ul.hero__pagination
      li.hero__pagination-item(v-for="(slide, index) in 3" :key="index")
        button.hero__pagination-button(
          @click="swiper.slideTo(index)"
          :class="{active: currentSlide === index}"
        )
          span.visually-hidden Слайд {{ slide }}
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

  background: $black;
  color: $white;
}

.hero__slide {
  &--first {
    background: url('~/assets/images/hero-1.jpg') no-repeat center top / 1680px 808px;

    @include tablet {
      background: url('~/assets/images/hero-1--tablet.jpg') no-repeat center center / 100% auto;
    }

    @include mobile {
      background: url('~/assets/images/hero-1--mobile.jpg') no-repeat center center / 100% auto;
    }
  }

  &--second {
    background: url('~/assets/images/hero-2.jpg') no-repeat center top / 1680px 808px;
  }

  &--third {
    background: url('~/assets/images/hero-3.jpg') no-repeat center top / 1680px 808px;
  }
}

.hero__slide-container {
  @include container;
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
    margin-top: 512px;
    font-size: 52px;
    line-height: 64px;
    font-weight: 500;

    @include desktop {
      margin-top: 440px;
    }

    @include notebook {
      margin-top: 380px;
    }

    @include tablet {
      margin-top: 340px;
      margin-bottom: 22px;
    }

    @include mobile {
      width: 200px;
      margin-top: 340px;
      margin-bottom: 20px;
      font-size: 32px;
      line-height: 40px;
    }
  }

  &--second {
    margin-top: 520px;
    font-size: 32px;
    line-height: 40px;
    font-weight: 500;

    @include desktop {
      margin-top: 448px;
    }

    @include notebook {
      margin-top: 380px;
    }

    @include tablet {
      margin-top: 340px;
      margin-bottom: 32px;
    }

    @include mobile {
      margin-top: 340px;
      margin-bottom: 28px;
      font-size: 20px;
      line-height: 28px;
    }
  }
}

.hero__link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 40px;
  margin-bottom: 80px;

  font-size: 16px;
  line-height: 16px;
  text-decoration: none;

  color: inherit;
  background-color: $green;
  border-radius: 100px;

  @include mobile {
    margin-bottom: 20px;
  }
}

.hero__controls {
  position: relative;
  @include container;

  @include mobile {
    display: none;
  }
}

.hero__controls-container {
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

.hero__pagination {
  position: absolute;
  bottom: -24px;
  left: 50%;
  transform: translateX(-50%);
  list-style: none;
  margin: 0 auto;
  padding: 0;
  display: none;
  gap: 8px;

  @include mobile {
    display: flex;
  }
}

.hero__pagination-button {
  display: flex;
  margin: 0;
  padding: 0;
  width: 8px;
  height: 8px;

  border: none;
  border-radius: 50%;
  background-color: $gray;
  cursor: pointer;

  &.active {
    background-color: $green;
  }
}
</style>
