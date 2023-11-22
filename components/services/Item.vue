<template lang="pug">
li.services-item
  h3.services-item__title(v-html="title")
  strong.services-item__subtitle(v-html="subtitle")
  p.services-item__text(v-html="text")
</template>

<script lang="ts" setup>
import type {Service} from '~/utils/services'

const props = defineProps<Service>()

const imageWithGradient = computed(() => `url(${props.imageWithGradient})`)
const image = computed(() => `url(${props.image})`)
const imageTablet = computed(() => `url(${props.imageTablet})`)
const imageMobile = computed(() => `url(${props.imageMobile})`)
</script>

<style lang="scss">
.services-item {
  display: flex;
  flex-flow: column;
  padding: 32px;
  width: 704px;
  min-height: 400px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: v-bind(imageWithGradient);
  border-radius: 24px;

  @include desktop {
    width: 582px;
    min-height: 340px;
  }

  @include notebook {
    width: auto;
    min-height: auto;
    padding: 0;
    padding-top: 264px;

    background-image: v-bind(image);
    background-position: top center;
    background-size: contain;
    border-radius: 0;
  }

  @include tablet {
    width: auto;
    min-height: auto;
    padding: 0;
    padding-top: 264px;

    background-image: v-bind(imageTablet);
    background-position: top center;
    background-size: contain;
    border-radius: 0;
  }

  @include mobile {
    width: auto;
    min-height: auto;
    padding: 0;
    padding-top: 176px;

    background-image: v-bind(imageMobile);
    background-position: top center;
    background-size: contain;
    border-radius: 0;
  }
}

.services-item__title {
  margin: 0;
  padding: 0;
  margin-bottom: 8px;

  font-size: 24px;
  line-height: 32px;
  font-weight: 500;

  @include desktop {
    width: 227px;
  }

  @include mobile {
    margin-bottom: 4px;

    font-size: 16px;
    line-height: 24px;
  }
}

.services-item__subtitle {
  margin: 0;
  padding: 0;
  margin-bottom: 8px;

  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  @include mobile {
    margin-bottom: 4px;

    font-size: 14px;
    line-height: 20px;
  }
}

.services-item__text {
  margin: 0;
  padding: 0;
  width: 280px;

  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color: $blackish;

  @include notebook {
    width: auto;
  }

  @include tablet {
    width: auto;
  }

  @include mobile {
    width: auto;

    font-size: 14px;
    line-height: 20px;
  }
}
</style>
