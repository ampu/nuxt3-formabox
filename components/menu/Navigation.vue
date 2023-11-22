<template lang="pug">
ul.menu-navigation
  li.menu-navigation__item
    a(href="#") О&nbsp;нас
  li.menu-navigation__item
    a(href="#") Продукция
  li.menu-navigation__item
    a(href="#") Услуги
  li.menu-navigation__item
    a(href="#") Новости
  li.menu-navigation__item
    a(href="#") Вакансии
  li.menu-navigation__item
    a(href="#") Контакты
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.menu-navigation {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 56px;
}

.menu-navigation a {
  @include link;
}
</style>
