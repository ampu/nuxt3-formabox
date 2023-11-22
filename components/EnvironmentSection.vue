<template lang="pug">
section.environment
  .environment__container
    EnvironmentIcon.environment__icon
    h2.environment__title Забота об окружающей среде
    p.environment__text Рациональность потребления и производства — до 50% продукции изготавливается из вторичного сырья: макулатурного лайнера, флютинга и мешочной бумаги
</template>

<script lang="ts" setup>
import EnvironmentIcon from '~/assets/icons/environment.svg?component'
</script>

<style lang="scss">
.environment {
  @include container;
  @include padding;

  margin-top: 120px;

  @include desktop {
    margin-top: 80px;
  }

  @include notebook {
    margin-top: 60px;
  }

  @include tablet {
    margin-top: 45px;
  }
}

.environment__container {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 65px;

  text-align: center;

  background-color: $green;
  color: $white;
  border-radius: 24px;

  @include tablet {
    padding: 32px;
  }

  @include mobile {
    padding: 32px;
  }
}

.environment__icon {
  display: flex;
  margin-bottom: 24px;
}

.environment__title {
  display: flex;
  margin: 0;
  padding: 0;
  margin-bottom: 16px;

  font-size: 32px;
  line-height: 32px;
  font-weight: 500;

  @include tablet {
    font-size: 24px;
    line-height: 1.2;
  }

  @include mobile {
    font-size: 20px;
    line-height: 1.2;
  }
}

.environment__text {
  display: flex;
  margin: 0;
  padding: 0;
  max-width: 900px;

  font-size: 24px;
  line-height: 32px;

  @include tablet {
    max-width: none;

    font-size: 16px;
    line-height: 24px;
  }

  @include mobile {
    max-width: none;

    font-size: 14px;
    line-height: 20px;
  }
}
</style>
