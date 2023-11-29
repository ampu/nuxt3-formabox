<template lang="pug">
.menu-mobile(v-if="uiStore.isMobileMenuOpen" @click="onClick")
  .menu-mobile__container
    Logo.menu-mobile__logo

    button.menu-mobile__close(type="button" @click="uiStore.isMobileMenuOpen = false")
      span.visually-hidden Закрыть
      TimesIcon

    .menu-mobile__search
      SearchIcon.menu-mobile__search-svg
      input.menu-mobile__search-input(type="search" name="search" placeholder="Поиск")

    ul.menu-mobile__navigation
      li.menu-mobile__navigation-item(
        v-for="(item, index) in HEADER_NAVIGATION"
      )
        a(:href="item.href" v-html="item.title")

    .menu-mobile__message
      MessageIcon
      a(href="#") Оставить сообщение

    a.menu-mobile__phone(href="tel:+74922404937") +7 (4922) 40-49-37

    ul.menu-mobile__socials
      li.menu-mobile__socials-item
        a(href="https://vk.com" target="_blank")
          VkIcon
          .visually-hidden Вконтакте
      li.menu-mobile__socials-item
        a(href="https://ok.ru" target="_blank")
          OkIcon
          .visually-hidden Одноклассники
      li.menu-mobile__socials-item
        a(href="https://telegram.org" target="_blank")
          TgIcon
          .visually-hidden Telegram
      li.menu-mobile__socials-item
        a(href="https://youtube.com" target="_blank")
          YtIcon
          .visually-hidden YouTube`
</template>

<script lang="ts" setup>
import VkIcon from '~/assets/icons/vk.svg?component'
import OkIcon from '~/assets/icons/ok.svg?component'
import TgIcon from '~/assets/icons/tg.svg?component'
import YtIcon from '~/assets/icons/yt.svg?component'
import TimesIcon from '~/assets/icons/times.svg?component'
import SearchIcon from '~/assets/icons/search.svg?component'
import MessageIcon from '~/assets/icons/message.svg?component'

const uiStore = useUiStore()

const onClick = (evt: Event) => {
  const target = evt.target as HTMLLinkElement
  if (target.tagName === `A`) {
    uiStore.isMobileMenuOpen = false
  }
}
</script>

<style lang="scss">
.menu-mobile {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  padding-top: 21px;
  padding-bottom: 32px;
  overflow-y: auto;
  display: none;

  background-color: $white;
  color: $black;

  @include tablet {
    display: flex;
    flex-flow: column;
  }

  @include mobile {
    display: flex;
    flex-flow: column;
    padding-top: 10px;
    padding-bottom: 16px;
  }
}

.menu-mobile__container {
  @include container;
  @include padding;

  display: grid;
  align-items: center;
  grid-template-areas:
    "logo phone close"
    ".    .     ."
    "search search search"
    "nav nav nav"
    "message message message"
    ". . ."
    "socials socials socials";
  grid-template-columns: 1fr auto auto;
  grid-template-rows:
    min-content
    44px
    auto
    auto
    auto
    176px
    auto;

  @include mobile {
    grid-template-areas:
      "logo    close"
      ".       ."
      "search  search"
      "nav     nav"
      "message message"
      "phone   phone"
      ".       ."
      "socials socials";
    grid-template-columns: 1fr auto;
    grid-template-rows:
      auto
      26px
      auto
      auto
      auto
      auto
      59px
      auto;
  }
}

.menu-mobile__logo {
  grid-area: logo;
  width: 110px;
  height: 63px;
  color: $orange;

  @include mobile {
    width: 69px;
    height: 40px;
  }
}

.menu-mobile__close {
  grid-area: close;
  margin: 0;
  padding: 0;

  border: none;
  background-color: transparent;
  cursor: pointer;
}

.menu-mobile__search {
  grid-area: search;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.menu-mobile__search-svg {
  position: absolute;
  left: 14px;

  color: $gray;
}

.menu-mobile__search-input {
  display: flex;
  width: 100%;
  padding: 8px;
  padding-left: 36px;
  margin: 0;

  font-size: 16px;
  line-height: 24px;

  border: none;
  border-radius: 8px;
  background-color: $ivory;
}

.menu-mobile__navigation {
  grid-area: nav;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column;
}

.menu-mobile__navigation-item {
  padding-top: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid $ivory;

  @include mobile {
    padding-top: 12px;
    padding-bottom: 12px;
  }
}

.menu-mobile__navigation a {
  @include link;
  font-size: 16px;
  line-height: 24px;
}

.menu-mobile__message {
  grid-area: message;
  display: flex;
  align-items: center;
  gap: 8px;

  padding-top: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid $ivory;

  @include mobile {
    padding-top: 12px;
    padding-bottom: 12px;
  }
}

.menu-mobile__message a {
  @include link;
  font-size: 16px;
  line-height: 24px;
}

.menu-mobile__phone {
  grid-area: phone;
  @include link;

  margin-right: 42px;

  font-size: 16px;
  line-height: 24px;
  font-weight: 500;

  @include mobile {
    padding-top: 12px;
    padding-bottom: 12px;
  }
}

.menu-mobile__socials {
  grid-area: socials;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 16px;
}

.menu-mobile__socials a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  color: $gray;
  background-color: $ivory;
  border-radius: 50%;
}
</style>
