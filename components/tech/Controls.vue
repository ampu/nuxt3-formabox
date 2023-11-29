<template lang="pug">
.tech-controls
  .tech-controls__container
    ul.tech-controls__inner
      li.tech-controls__item(
        v-for="(tech, techIndex) in TECHNOLOGIES"
        :key="techIndex"
      )
        button.tech-controls__button(
          type="button"
          :class="{active: techIndex === activeIndex}"
          v-text="tech.tab"
          @click="emit('update:activeIndex', techIndex)"
        )
</template>

<script lang="ts" setup>
import {TECHNOLOGIES} from '~/utils/technologies'

const props = defineProps<{
  activeIndex: number,
}>()

const emit = defineEmits<{
  (event: 'update:activeIndex', index: number): void,
}>()
</script>

<style lang="scss">
.tech-controls {
  overflow: auto;
  margin-bottom: 24px;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @include notebook {
    margin-bottom: 34px;
  }
}

.tech-controls__container {
  @include container;
  @include padding;
}

.tech-controls__inner {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.tech-controls__button {
  margin: 0;
  padding: 10px 24px;

  font-size: 18px;
  line-height: 18px;
  white-space: nowrap;

  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 40px;

  &.active {
    color: $white;
    background-color: $green;
  }

  @include notebook {
    font-size: 16px;
    line-height: 16px;
  }

  @include tablet {
    font-size: 16px;
    line-height: 16px;
  }

  @include mobile {
    font-size: 14px;
    line-height: 14px;
  }
}
</style>
