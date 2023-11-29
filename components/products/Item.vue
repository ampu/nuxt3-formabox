<template lang="pug">
li.products-item
  a.products-item__container(href="#")
    h3.products-item__title(v-text="title")
    p.products-item__text(v-for="line in text" v-text="line")
    p.products-item__link
      span.visually-hidden Подробнее
      ArrowRight
</template>

<script lang="ts" setup>
import ArrowRight from '~/assets/icons/arrow-right.svg?component'

import type {Product} from '~/utils/products'

const props = defineProps<Product>()

const tvSource = computed(() => `url('${props.images.tv.source}')`)
const tvWidth = computed(() => `${props.images.tv.width}px`)
const tvHeight = computed(() => `${props.images.tv.height}px`)
const tvRight = computed(() => `${props.images.tv.right}px`)
const tvBottom = computed(() => `${props.images.tv.bottom}px`)

const desktopSource = computed(() => `url('${props.images.desktop.source}')`)
const desktopWidth = computed(() => `${props.images.desktop.width}px`)
const desktopHeight = computed(() => `${props.images.desktop.height}px`)
const desktopRight = computed(() => `${props.images.desktop.right}px`)
const desktopBottom = computed(() => `${props.images.desktop.bottom}px`)

const notebookSource = computed(() => `url('${props.images.notebook.source}')`)
const notebookWidth = computed(() => `${props.images.notebook.width}px`)
const notebookHeight = computed(() => `${props.images.notebook.height}px`)
const notebookRight = computed(() => `${props.images.notebook.right}px`)
const notebookBottom = computed(() => `${props.images.notebook.bottom}px`)

const tabletSource = computed(() => `url('${props.images.tablet.source}')`)
const tabletWidth = computed(() => `${props.images.tablet.width}px`)
const tabletHeight = computed(() => `${props.images.tablet.height}px`)
const tabletRight = computed(() => `${props.images.tablet.right}px`)
const tabletBottom = computed(() => `${props.images.tablet.bottom}px`)

const mobileSource = computed(() => `url('${props.images.mobile.source}')`)
const mobileWidth = computed(() => `${props.images.mobile.width}px`)
const mobileHeight = computed(() => `${props.images.mobile.height}px`)
const mobileLeft = computed(() => `${props.images.mobile.left}px`)
const mobileTop = computed(() => `${props.images.mobile.top}px`)
</script>

<style lang="scss">
.products-item {
  position: relative;
  display: flex;
  flex-flow: column;
  grid-column-end: span v-bind(colspan);
  height: 400px;

  border-radius: 24px;
  background-repeat: no-repeat;
  background-image: v-bind(tvSource);
  background-position: right v-bind(tvRight) bottom v-bind(tvBottom);
  background-size: v-bind(tvWidth) v-bind(tvHeight);

  @include desktop {
    background-image: v-bind(desktopSource);
    background-position: right v-bind(desktopRight) bottom v-bind(desktopBottom);
    background-size: v-bind(desktopWidth) v-bind(desktopHeight);
  }

  @include notebook {
    height: 300px;
    &:first-of-type {
      height: 312px;
    }

    background-image: v-bind(notebookSource);
    background-position: right v-bind(notebookRight) bottom v-bind(notebookBottom);
    background-size: v-bind(notebookWidth) v-bind(notebookHeight);
  }

  @include tablet {
    height: auto;
    min-height: 300px;
    &:first-of-type {
      height: 312px;
    }

    background-image: v-bind(tabletSource);
    background-position: right v-bind(tabletRight) bottom v-bind(tabletBottom);
    background-size: v-bind(tabletWidth) v-bind(tabletHeight);
  }

  @include mobile {
    grid-column-end: span 1;
    height: auto;
    padding-top: 160px;

    border-radius: 8px;
    background-image: v-bind(mobileSource);
    background-position: left v-bind(mobileLeft) top v-bind(mobileTop);
    background-size: v-bind(mobileWidth) v-bind(mobileHeight);

    box-shadow: 0 0 12px 0 rgba($black, 0.12);
  }

  background-color: $ivory;
}

.products-item__container {
  display: flex;
  flex-flow: column;
  padding: 32px;
  height: 100%;

  text-decoration: none;

  color: inherit;

  @include mobile {
    padding: 20px;

    border-radius: 0 0 8px 8px;
    background-color: $white;
  }
}

.products-item__title {
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  max-width: 340px;

  font-size: 24px;
  line-height: 32px;

  @include tablet {
    font-size: 20px;
    line-height: 32px;
  }

  @include mobile {
    font-size: 16px;
    line-height: 24px;
  }
}

.products-item__text {
  margin: 0;
  padding: 0;
  max-width: 340px;

  font-size: 16px;
  line-height: 24px;

  color: $brown;

  &:not(:first-of-type) {
    margin-top: 16px;
  }

  @include notebook {
    max-width: 468px;
  }

  @include tablet {
    max-width: 364px;
  }

  @include mobile {
    max-width: 100%;

    &:not(:first-of-type) {
      margin-top: 0;
    }

    font-size: 14px;
    line-height: 20px;
  }
}

.products-item__link {
  flex-shrink: 0;
  margin-top: auto;
  display: none;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;

  font-size: 16px;
  line-height: 24px;

  background-color: $green;
  border-radius: 50%;

  .products-item:hover & {
    display: flex;

    @include tablet {
      display: none;
    }

    @include mobile {
      display: none;
    }
  }
}
</style>
