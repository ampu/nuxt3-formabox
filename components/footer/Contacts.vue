<template lang="pug">
ul.footer-contacts
  li.footer-contacts__item
    a(href="tel:+74951234567")
      PhoneIcon
      | +7&nbsp;(4922)&nbsp;40-49-37
  li.footer-contacts__item
    a(href="mailto:sales@forma-box.ru")
      EmailIcon
      | sales@forma-box.ru
</template>

<script lang="ts" setup>
import PhoneIcon from '~/assets/icons/phone.svg?component'
import EmailIcon from '~/assets/icons/email.svg?component'
</script>

<style lang="scss">
.footer-contacts {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 80px;

  font-size: 16px;
  line-height: 16px;

  @include notebook-tablet {
    flex-flow: column;
    gap: 32px;
    margin-left: 75px;
  }

  @include tablet {
    gap: 24px;
    margin: 0;
  }

  @include mobile {
    flex-flow: column;
    gap: 25px;

    font-size: 14px;
    line-height: 14px;
  }
}

.footer-contacts__item a {
  @include link;

  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
