<template lang="pug">
section.consulting
  form.consulting__form(method="POST" action="https://httpbin.org/post")
    h2.consulting__title Консультация специалиста
    p.consulting__text Оставьте ваши контактные данные и мы свяжемся с Вами для уточнения Вашего интереса и вместе выберем удобное время для встречи
    UiNameInput.consulting__input
    UiPhoneInput.consulting__input
    UiEmailInput.consulting__input.last
    button.consulting__submit(type="submit") Отправить
      ArrowRightIcon
</template>

<script lang="ts" setup>
import ArrowRightIcon from '~/assets/icons/arrow-right.svg?component'
</script>

<style lang="scss">
.consulting {
  @include container;
  @include padding;

  @include mobile {
    padding: 0;
  }

  @include notebook {
    margin-top: 90px;
  }

  @include tablet {
    margin-top: 24px;
  }
}

.consulting__form {
  padding: 80px;
  padding-bottom: 96px;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 32px;

  text-align: center;

  background-color: $ivory;
  border-radius: 24px;

  @include mobile {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 40px;
  }
}

.consulting__title {
  margin: 0;
  padding: 0;
  margin-bottom: 16px;

  font-size: 32px;
  line-height: 32px;
  font-weight: 500;

  @include mobile {
    font-size: 16px;
    line-height: 16px;
  }
}

.consulting__text {
  margin: 0 auto;
  padding: 0;
  margin-bottom: 32px;
  width: 616px;

  font-size: 16px;
  line-height: 24px;

  @include mobile {
    width: auto;
    margin-bottom: 20px;

    font-size: 14px;
    line-height: 20px;
  }
}

.consulting__input {
  margin: 0;
  padding: 17px 20px;
  display: flex;
  margin-bottom: 16px;
  width: 560px;

  font-size: 20px;
  line-height: 20px;

  border: none;
  border-radius: 8px;

  @include mobile {
    width: 100%;
    padding: 12px;

    font-size: 16px;
    line-height: 16px;
  }

  &.last {
    margin-bottom: 40px;

    @include mobile {
      margin-bottom: 24px;
    }
  }

  &::placeholder {
    opacity: 0.2;
  }
}

.consulting__submit {
  margin: 0;
  padding: 17px 40px;
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 20px;
  line-height: 20px;

  border: none;
  border-radius: 50px;
  background-color: $green;
  color: $white;
  cursor: pointer;

  @include mobile {
    padding: 12px 40px;

    font-size: 16px;
    line-height: 16px;
  }
}

[__use_react_component_wrap] {
  @include mobile {
    width: 100% !important;
  }
}
</style>
