<template lang="pug">
.products#products
  h2.products__title Продукция
  p.products__text В ассортимент нашей продукции входят разные профили гофрокартона в зависимости от количества слоев
  ul.products__container
    ProductsItem(
      v-for="(product, index) in PRODUCTS"
      :key="index"
      v-bind="product"
    )
</template>

<script lang="ts" setup>
import {PRODUCTS} from '~/utils/products'
</script>

<style lang="scss">
.products {
  @include container;
  @include padding;

  padding-top: 120px;

  @include desktop {
    padding-top: 100px;
  }

  @include notebook {
    padding-top: 110px;
  }

  @include tablet {
    padding-top: 100px;
  }

  @include mobile {
    padding-top: 64px;
  }
}

.products__container {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;

  @include notebook {
    grid-template-columns: 1fr 1fr;
  }

  @include tablet {
    gap: 24px;
    grid-template-columns: 1fr 1fr;
  }

  @include mobile {
    gap: 16px;
    grid-template-columns: 1fr;
  }
}

.products__title {
  margin: 0;
  padding: 0;
  margin-bottom: 24px;

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
    margin-bottom: 12px;

    font-size: 24px;
    line-height: 24px;
  }
}

.products__text {
  margin: 0;
  padding: 0;
  margin-bottom: 40px;
  max-width: 710px;

  font-size: 24px;
  line-height: 32px;

  @include desktop {
    margin-bottom: 26px;
  }

  @include notebook {
    margin-bottom: 24px;

    font-size: 20px;
    line-height: 28px;
  }

  @include tablet {
    margin-bottom: 24px;

    font-size: 20px;
    line-height: 28px;
  }

  @include mobile {
    margin-bottom: 34px;

    font-size: 14px;
    line-height: 20px;
  }
}
</style>
