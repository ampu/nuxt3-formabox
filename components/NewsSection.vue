<template lang="pug">
section.news#news
  .news__header
    h2.news__title Новости
    a.news__more(href="#") Все новости
  ul.news__items
    li.news__item(
      v-for="(item, index) in NEWS"
      :key="index"
    )
      a.news__item-container(href="#")
        img.news__item-image(:src="item.image")
        span.news__item-date(v-text="item.date")
        h3.news__item-title(v-text="item.title")
        p.news__item-text(v-text="item.text")
</template>

<script lang="ts" setup>
import {NEWS} from '~/utils/news'
</script>

<style lang="scss">
.news {
  @include container;
  @include padding;
  margin-top: 120px;

  @include desktop {
    margin-top: 80px;
  }

  @include notebook {
    margin-top: 65px;
  }

  @include tablet {
    margin-top: 80px;
  }
}

.news__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;

  @include notebook {
    margin-bottom: 46px;
  }

  @include mobile {
    margin-bottom: 20px;
  }
}

.news__title {
  margin: 0;
  padding: 0;

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
    font-size: 24px;
    line-height: 24px;
  }
}

.news__more {
  @include link;

  font-size: 16px;
  line-height: 16px;

  color: $green;

  @include mobile {
    font-size: 14px;
    line-height: 14px;
  }
}

.news__items {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @include notebook {
    gap: 40px;
    grid-template-columns: 1fr;
  }

  @include tablet {
    gap: 48px;
    grid-template-columns: 1fr;
  }

  @include mobile {
    gap: 48px;
    grid-template-columns: 1fr;
  }
}

.news__item {
  @include notebook {
    display: grid;
    column-gap: 40px;
    grid-template-areas:
      "image date"
      "image title"
      "image text";
    grid-template-columns: auto 1fr;
    grid-template-rows:
      auto
      auto
      1fr;
  }

  @include tablet {
    display: grid;
    column-gap: 24px;
    grid-template-areas:
      "image date"
      "image title"
      "image text";
    grid-template-columns: auto 1fr;
    grid-template-rows:
      auto
      auto
      1fr;
  }
}

.news__item-container {
  text-decoration: none;

  color: inherit;
}

.news__item-image {
  grid-area: image;
  display: flex;
  width: 459px;
  height: 300px;
  margin-bottom: 30px;

  border-radius: 24px;

  @include desktop {
    width: 379px;
    height: 246px;
  }

  @include notebook {
    margin-bottom: 0;
    width: 320px;
    height: 209px;
  }

  @include tablet {
    margin-bottom: 0;
    width: 276px;
    height: 180px;
  }

  @include mobile {
    margin-bottom: 16px;
    width: 288px;
    height: 188px;

    border-radius: 8px;
  }
}

.news__item-date {
  grid-area: date;
  display: flex;
  margin-bottom: 8px;

  font-size: 14px;
  line-height: 20px;

  color: $blackish;

  @include mobile {
    margin-bottom: 6px;
  }
}

.news__item-title {
  grid-area: title;
  margin: 0;
  padding: 0;
  display: flex;
  margin-bottom: 4px;

  font-size: 24px;
  line-height: 32px;
  font-weight: 500;

  @include mobile {
    font-size: 16px;
    line-height: 24px;
  }

  @include mobile {
    margin-bottom: 2px;
  }
}

.news__item-text {
  grid-area: text;
  margin: 0;
  padding: 0;
  display: flex;

  font-size: 16px;
  line-height: 24px;

  @include mobile {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
