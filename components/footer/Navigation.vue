<template lang="pug">
ul.footer-navigation
  li.footer-navigation__item
    a(href="#about") О&nbsp;нас
  li.footer-navigation__item
    a(href="#news") Новости
  li.footer-navigation__item.footer-navigation__item--secondary
    a(href="#consulting") Консультация

  li.footer-navigation__item
    a(href="#products") Продукция
  li.footer-navigation__item
    a(href="#") Вакансии
  li.footer-navigation__item.footer-navigation__item--secondary
    a(href="#") Связаться

  li.footer-navigation__item
    a(href="#services") Услуги
  li.footer-navigation__item
    a(href="#footer") Контакты
  li.footer-navigation__item.footer-navigation__item--secondary
    a(href="#") Оставить заявку
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.footer-navigation {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  justify-content: space-between;

  font-size: 16px;
  line-height: 16px;
}

.footer-navigation__item {
  &--secondary {
    color: $blackish;
  }
}

.footer-navigation__item a {
  @include link;
}
</style>
