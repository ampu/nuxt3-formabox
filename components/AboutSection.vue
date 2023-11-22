<template lang="pug">
section.about
  .about__container
    .about__left
      h2.about__title О компании
      p.about__text Formabox обладает мощной производственной базой, поэтому заказ любого масштаба будет выполнен в срок
      p.about__description Наше выгодное отличие от других производителей — широкий спектр выпускаемой продукции. Помимо упаковок и коробок разной формы и размера, Formabox производит картонные и бумажные&nbsp;мешки, втулки, гильзы и шпули.
    .about__right
      .about__video-container
        img.about__video(src="~/assets/images/about-video.jpg" alt="Видео о компании")
        button.about__video-play(type="button")
          span.visually-hidden Играть
          PlayIcon

  .about__points
    ul.about__keys
      li.about__point
        UsersIcon.about__point-icon
        span.about__point-title Специалисты
        span.about__point-text для поиска упаковочных
          br
          | решений
      li.about__point
        SettingsIcon.about__point-icon
        span.about__point-title Лаборатория
        span.about__point-text входного сырья и готовой продукции
      li.about__point
        HeartIcon.about__point-icon
        span.about__point-title Экологичность
        span.about__point-text Formabox производит упаковку из экологичных материалов

    ul.about__numbers
      li.about__point
        CodepenIcon.about__point-icon
        span.about__point-number 12 000 м
          sup 2
        span.about__point-text Площадь производственно-складского комплекса
      li.about__point
        LayersIcon.about__point-icon
        span.about__point-number 12 млн
          sup 2
        span.about__point-text Гофрокартона и гофропродукции в месяц
      li.about__point
        RepeatIcon.about__point-icon
        span.about__point-number 8 млн
        span.about__point-text Открытых и закрытых бумажных мешков в месяц
</template>

<script lang="ts" setup>
import PlayIcon from '~/assets/icons/play.svg?component'
import UsersIcon from '~/assets/icons/users.svg?component'
import SettingsIcon from '~/assets/icons/settings.svg?component'
import HeartIcon from '~/assets/icons/heart.svg?component'
import CodepenIcon from '~/assets/icons/codepen.svg?component'
import LayersIcon from '~/assets/icons/layers.svg?component'
import RepeatIcon from '~/assets/icons/repeat.svg?component'
</script>

<style lang="scss">
.about {
  @include container;
  @include padding;
  margin-top: 90px;

  background: $white;
  color: $black;

  @include desktop {
    margin-top: 80px;
  }

  @include notebook {
    margin-top: 28px;
  }

  @include tablet {
    margin-top: 20px;
  }

  @include mobile {
    margin-top: 60px;
  }
}

.about__container {
  display: flex;
  justify-content: space-between;
  gap: 90px;
  padding-right: 40px;
  padding-bottom: 120px;

  @include desktop {
    gap: 35px;
    padding-right: 0;
    padding-bottom: 100px;
  }

  @include notebook {
    flex-flow: column;
    padding-right: 0;
    padding-bottom: 60px;
    gap: 0;
  }

  @include tablet {
    flex-flow: column;
    padding-right: 12px;
    padding-bottom: 60px;
    gap: 8px;
  }

  @include mobile {
    flex-flow: column;
    padding-right: 12px;
    padding-bottom: 40px;
    gap: 8px;
  }
}

.about__left {
  display: flex;
  flex-flow: column;
}

.about__right {
  display: flex;
  flex-flow: column;
}

.about__title {
  margin: 0;
  padding: 0;
  margin-top: 30px;
  display: flex;
  margin-bottom: 22px;

  font-size: 44px;
  line-height: 44px;
  font-weight: 500;

  @include desktop {
    margin-top: 0;
  }

  @include notebook {
    margin-bottom: 24px;

    font-size: 32px;
    line-height: 32px;
  }

  @include tablet {
    margin-bottom: 24px;

    font-size: 32px;
    line-height: 32px;
  }

  @include mobile {
    margin-bottom: 16px;

    font-size: 24px;
    line-height: 24px;
  }
}

.about__text {
  margin: 0;
  padding: 0;
  display: flex;
  margin-bottom: 24px;

  font-size: 32px;
  line-height: 44px;

  @include notebook {
    margin-bottom: 12px;

    font-size: 24px;
    line-height: 32px;
  }

  @include tablet {
    margin-bottom: 12px;

    font-size: 24px;
    line-height: 32px;
  }

  @include mobile {
    margin-bottom: 8px;

    font-size: 17px;
    line-height: 24px;
  }
}

.about__description {
  margin: 0;
  padding: 0;
  display: flex;

  font-size: 18px;
  line-height: 28px;

  @include notebook {
    font-size: 16px;
    line-height: 24px;
  }

  @include tablet {
    font-size: 16px;
    line-height: 24px;
  }

  @include mobile {
    font-size: 14px;
    line-height: 20px;
  }
}

.about__video-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 32px;

  @include desktop {
    padding-top: 0;
  }

  @include mobile {
    padding-top: 0;
  }
}

.about__video {
  display: flex;
  width: 736px;
  height: 414px;
  object-fit: cover;

  border-radius: 24px;

  @include desktop {
    width: 584px;
    height: 329px;
  }

  @include notebook {
    width: 640px;
    height: 361px;
  }

  @include tablet {
    width: 640px;
    height: 361px;
  }

  @include mobile {
    width: 288px;
    height: 162px;
    border-radius: 8px;
  }
}

.about__video-play {
  position: absolute;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;

  background-color: $green;
  border: none;
  border-radius: 50%;
  color: $white;
  cursor: pointer;

  @include mobile {
    width: 40px;
    height: 40px;
  }
}

.about__points {
  display: flex;
  flex-flow: column;
  gap: 105px;

  @include notebook {
    flex-flow: row;
    padding-right: 45px;
    gap: 10px;
  }

  @include tablet {
    flex-flow: row;
    padding-right: 45px;
    gap: 12px;
  }

  @include mobile {
    flex-flow: column;
    padding-right: 0;
    gap: 30px;
  }
}

.about__keys {
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
    gap: 0;
  }

  @include mobile {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

.about__numbers {
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

.about__point {
  position: relative;
  padding-left: 80px;

  @include mobile {
    padding-left: 48px;
  }
}

.about__point-icon {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 48px;
  height: 48px;

  @include mobile {
    width: 32px;
    height: 32px;
  }
}

.about__point-title {
  display: flex;
  margin-bottom: 12px;

  font-size: 32px;
  line-height: 32px;

  color: $orange;

  @include tablet {
    font-size: 24px;
    line-height: 24px;
  }

  @include mobile {
    margin-bottom: 8px;

    font-size: 20px;
    line-height: 20px;
  }
}

.about__point-number {
  display: flex;
  margin-bottom: 12px;

  font-size: 56px;
  line-height: 56px;

  color: $orange;

  @include tablet {
    font-size: 24px;
    line-height: 24px;
  }

  @include mobile {
    font-size: 24px;
    line-height: 24px;
  }
}

.about__point-number sup {
  position: relative;
  bottom: 10px;

  font-size: 28px;
  font-weight: 500;

  @include tablet {
    bottom: 0;
    font-size: 16px;
    line-height: 16px;
  }

  @include mobile {
    bottom: 0;
    font-size: 16px;
    line-height: 16px;
  }
}

.about__point-text {
  display: flex;

  font-size: 18px;
  line-height: 24px;

  @include tablet {
    font-size: 16px;
    line-height: 20px;
  }

  @include mobile {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
