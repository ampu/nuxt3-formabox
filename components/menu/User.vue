<template lang="pug">
.menu-user
  a.menu-user__phone(href="tel:+74922404937") +7 (4922) 40-49-37
  .menu-user__message
    MessageIcon
    a(href="#") Оставить сообщение
  .menu-user__search
    SearchIcon
    a(href="#") Поиск
  button.menu-user__burger(@click="uiStore.isMobileMenuOpen = true")
    BurgerIcon
    span.visually-hidden Меню
</template>

<script lang="ts" setup>
import MessageIcon from '~/assets/icons/message.svg?component'
import SearchIcon from '~/assets/icons/search.svg?component'
import BurgerIcon from '~/assets/icons/menu.svg?component'

import {useUiStore} from '~/stores/ui-store'
const uiStore = useUiStore()
</script>

<style lang="scss">
.menu-user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
  margin-bottom: 40px;

  @include tablet {
    margin: 0;
    justify-content: flex-end;
    gap: 42px;
  }

  @include mobile {
    margin: 0;
    justify-content: flex-end;
    gap: 0;
  }
}

.menu-user__phone {
  @include link;
  margin-right: auto;

  font-size: 16px;
  line-height: 20px;

  @include tablet {
    margin: 0;
  }

  @include mobile {
    display: none;
  }
}

.menu-user__message {
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.5;

  @include tablet {
    display: none;
  }

  @include mobile {
    display: none;
  }
}

.menu-user__message a {
  @include link;

  font-size: 16px;
  line-height: 20px;
}

.menu-user__search {
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.5;

  @include tablet {
    display: none;
  }

  @include mobile {
    display: none;
  }
}

.menu-user__search a {
  @include link;

  font-size: 16px;
  line-height: 20px;
}

.menu-user__burger {
  display: none;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  @include tablet {
    display: flex;
    align-items: center;
  }

  @include mobile {
    display: flex;
    align-items: center;
  }
}
</style>
