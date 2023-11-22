<template lang="pug">
.menu-user
  a.menu-user__phone(href="tel:+74922404937") +7 (4922) 40-49-37
  .menu-user__message
    MessageIcon
    a(href="#") Оставить сообщение
  .menu-user__search
    SearchIcon
    a(href="#") Поиск
</template>

<script lang="ts" setup>
import MessageIcon from '~/assets/icons/message.svg?component'
import SearchIcon from '~/assets/icons/search.svg?component'
</script>

<style lang="scss">
.menu-user {
  display: flex;
  justify-content: space-between;
  gap: 64px;
  margin-bottom: 40px;
}

.menu-user__phone {
  @include link;
  margin-right: auto;
}

.menu-user__message {
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.5;
}

.menu-user__message a {
  @include link;
}

.menu-user__search {
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.5;
}

.menu-user__search a {
  @include link;
}
</style>
