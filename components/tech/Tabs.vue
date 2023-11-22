<template lang="pug">
.tech-tabs
  template(
    v-for="(tech, techIndex) in TECHNOLOGIES"
    :key="techIndex"
  )
    .tech-tabs__item(v-if="techIndex === activeIndex")
      .tech-tabs__item-container
        template(
          v-for="(item, itemIndex) in tech.items"
          :key="itemIndex"
        )
          h3.tech-tabs__title(v-text="item.title")
          strong.tech-tabs__text(v-text="item.text")
          ul.tech-tabs__points
            li.tech-tabs__point(
              v-for="(point, pointIndex) in item.points"
              :key="pointIndex"
            )
              p.tech-tabs__point-text(v-html="point")
</template>

<script lang="ts" setup>
import {TECHNOLOGIES} from '~/utils/technologies'

const props = defineProps<{
  activeIndex: number,
}>()
</script>

<style lang="scss">
.tech-tabs__item {
  position: relative;
  display: flex;
  flex-flow: column;

  padding-left: 917px;
  height: 600px;

  @include desktop {
    padding-left: 719px;
    height: 600px;
  }

  @include notebook {
    padding-left: 449px;
    height: 492px;
  }

  @include tablet {
    padding-left: 0;
    padding-top: 347px;
    height: auto;
  }

  @include mobile {
    padding-left: 0;
    padding-top: 200px;
    height: auto;
  }

  &::before {
    content: "";
    position: absolute;
    display: flex;
    left: 0;
    top: 0;
    bottom: 0;

    border-radius: 24px 0 0 24px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    width: 917px;
    background-image: url("~/assets/images/tech-item-1.png");

    @include desktop {
      width: 719px;
    }

    @include notebook {
      width: 449px;
    }

    @include tablet {
      width: 100%;
      height: 347px;
      background-image: url("~/assets/images/tech-item-1--tablet.png");

      border-radius: 24px 24px 0 0;
    }

    @include mobile {
      width: 100%;
      height: 200px;
      background-image: url("~/assets/images/tech-item-1--tablet.png");

      border-radius: 24px 24px 0 0;
    }
  }
}

.tech-tabs__item-container {
  display: flex;
  flex-flow: column;
  padding: 64px;
  height: 100%;

  background-color: $ivory;
  border-radius: 0 24px 24px 0;

  @include notebook {
    padding: 40px;
  }

  @include tablet {
    padding: 40px;

    border-radius: 0 0 24px 24px;
  }

  @include mobile {
    padding: 16px;

    border-radius: 0 0 24px 24px;
  }
}

.tech-tabs__title {
  margin: 0;
  padding: 0;
  display: flex;
  margin-bottom: 4px;

  font-size: 14px;
  line-height: 24px;
  font-weight: 400;

  color: $blackish;

  @include mobile {
    font-size: 12px;
    line-height: 24px;
  }

  &:not(:first-of-type) {
    margin-top: 64px;

    @include notebook {
      margin-top: 24px;
    }

    @include tablet {
      margin-top: 36px;
    }

    @include mobile {
      margin-top: 18px;
    }
  }
}

.tech-tabs__text {
  margin: 0;
  padding: 0;
  display: flex;
  margin-bottom: 8px;

  font-size: 20px;
  line-height: 24px;
  font-weight: 500;

  @include mobile {
    font-size: 16px;
    line-height: 24px;
  }
}

.tech-tabs__points {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column;

  @include mobile {
    gap: 6px;
  }
}

.tech-tabs__point {
  display: flex;
  gap: 20px;

  font-size: 16px;
  line-height: 24px;

  @include mobile {
    gap: 12px;

    font-size: 14px;
    line-height: 18px;
  }

  &::before {
    content: "•"
  }
}

.tech-tabs__point-text {
  margin: 0;
  padding: 0;
}
</style>
