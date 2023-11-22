<template lang="pug">
ul.socials
  li.socials__item
    a(href="#")
      VkIcon
      .visually-hidden Вконтакте
  li.socials__item
    a(href="#")
      OkIcon
      .visually-hidden Одноклассники
  li.socials__item
    a(href="#")
      TgIcon
      .visually-hidden Telegram
  li.socials__item
    a(href="#")
      YtIcon
      .visually-hidden YouTube
</template>

<script lang="ts" setup>
import VkIcon from '~/assets/icons/vk.svg?component'
import OkIcon from '~/assets/icons/ok.svg?component'
import TgIcon from '~/assets/icons/tg.svg?component'
import YtIcon from '~/assets/icons/yt.svg?component'
</script>

<style lang="scss">
.socials {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 16px;

  @include notebook {
    display: grid;
    grid-template-columns: min-content min-content;
    margin-left: auto;
  }
}

.socials__item a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  background-color: $white;
  border-radius: 50%;
}
</style>
