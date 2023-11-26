<template lang="pug">
.footer#footer
  .footer__container
    Logo.footer__logo
    hr.footer__lline
    FooterAddress.footer__address
    p.footer__copyright © «Formabox», 2022
    hr.footer__vline
    FooterNavigation.footer__navigation
    hr.footer__dash1
    FooterContacts.footer__contacts
    FooterSocials.footer__socials
    hr.footer__dash2
    strong.footer__slogan Держите ваш бизнес в форме
    hr.footer__rline
    p.footer__name Общество с ограниченной ответственностью «Формабокс» Formabox, LLC
    a.footer__policy(href="#") Политика конфиденциальности
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.footer {
  margin-top: 180px;

  background-color: $ivory;

  @include desktop {
    margin-top: 130px;
  }
}

.footer__container {
  @include container;
  @include padding;
  margin-top: auto;

  display: grid;
  grid-template-areas:
    ".         .         vline .     .          ."
    "logo      .         vline .     nav        ."
    ".         .         vline .     dash1      dash1"
    "lline     lline     vline .     .          ."
    "address   .         vline .     contacts   socials"
    "address   .         vline .     dash2      dash2"
    "address   .         vline .     slogan     slogan"
    ".         .         vline rline rline      rline"
    "copyright .         vline .     name       policy"
    ".         .         vline .     .          .";
  align-items: center;
  grid-template-columns: 351px 107px min-content 94px 1fr 214px;
  grid-template-rows:
    64px
    auto
    auto
    auto
    auto
    auto
    auto
    auto
    auto
    32px;

  @include desktop {
    grid-template-areas:
      ".         .         vline .     .          ."
      "logo      .         vline .     nav        nav"
      ".         .         vline .     dash1      dash1"
      "lline     lline     vline .     .          ."
      "address   .         vline .     contacts   socials"
      "address   .         vline .     dash2      dash2"
      "address   .         vline .     slogan     slogan"
      ".         .         vline rline rline      rline"
      "copyright .         vline .     name       policy"
      ".         .         vline .     .          .";
    grid-template-columns: 351px 59px min-content 40px 1fr 214px;
  }

  @include notebook {
    grid-template-areas:
      ".         .         ."
      "logo      nav       nav"
      "dash1     dash1     dash1"
      "address   contacts  socials"
      "dash2     dash2     dash2"
      "slogan    slogan    slogan"
      "lline     lline     lline"
      ".         .         ."
      "name      name      policy"
      ".         .         ."
      "rline     rline     rline"
      "copyright copyright copyright"
      ".         .         .";
    grid-template-columns: 380px auto auto;
    grid-template-rows:
      40px
      auto
      auto
      auto
      auto
      auto
      auto
      32px
      auto
      32px
      auto
      auto
      24px;
  }

  @include tablet {
    grid-template-areas:
      ".         .         ."
      "logo      nav       nav"
      "dash1     dash1     dash1"
      "address   address   contacts"
      "address   address   socials"
      "dash2     dash2     dash2"
      "slogan    slogan    slogan"
      "lline     lline     lline"
      ".         .         ."
      "name      name      policy"
      ".         .         ."
      "rline     rline     rline"
      "copyright copyright copyright"
      ".         .         .";
    grid-template-columns: 218px 214px auto;
    grid-template-rows:
      40px
      auto
      auto
      auto
      auto
      auto
      auto
      auto
      22px
      auto
      22px
      auto
      auto
      24px;
  }

  @include mobile {
    grid-template-areas:
      "logo"
      "address"
      "contacts"
      "socials"
      "dash1"
      "slogan"
      "dash2"
      "name"
      "lline"
      "policy"
      "rline"
      "copyright";
    grid-template-columns: 1fr;
    grid-template-rows:
      auto;
  }
}

.footer__logo {
  grid-area: logo;
  align-self: start;
  width: 180px;
  height: 103px;

  color: $orange;

  @include notebook {
    margin-bottom: 40px;
  }

  @include tablet {
    width: 151px;
    height: 86px;
    margin-bottom: 60px;
  }

  @include mobile {
    width: 103px;
    height: 59px;
    margin-top: 20px;
    margin-bottom: 32px;
  }
}

.footer__address {
  grid-area: address;
  margin-top: 34px;

  @include notebook-tablet {
    margin: 0;
  }

  @include mobile {
    margin: 0;
    margin-bottom: 21px;
    width: 240px;
  }
}

.footer__copyright {
  grid-area: copyright;
  padding: 0;
  margin: 0;

  font-size: 14px;
  line-height: 14px;
  color: $gray;

  @include notebook-tablet {
    margin: 0 auto;
  }

  @include mobile {
    margin: 0;
    margin-top: 16px;
    margin-bottom: 16px;
  }
}

.footer__vline {
  grid-area: vline;
  margin: 0;
  height: 100%;
  width: 1px;

  border: none;
  border-right: 1px solid rgba($gray, 0.4);
}

.footer__lline {
  grid-area: lline;
  margin: 0;
  height: 1px;
  width: calc(100% + 10000px);
  margin-left: -10000px;

  border: none;
  border-top: 1px solid rgba($gray, 0.4);

  @include notebook {
    margin: 0;
    width: 100%;
  }

  @include tablet {
    margin: 0;
    width: 100%;
  }

  @include mobile {
    margin: 0;
    width: 100%;
  }
}

.footer__rline {
  grid-area: rline;

  margin: 0;
  height: 1px;
  margin-bottom: 32px;

  border: none;
  border-top: 1px solid rgba($gray, 0.4);
  box-shadow:
    500px 0 0 0 rgba($gray, 0.4),
    1000px 0 0 0 rgba($gray, 0.4);

  @include notebook {
    box-shadow: none;
  }

  @include tablet {
    box-shadow: none;
  }

  @include mobile {
    box-shadow: none;
    margin: 0;
  }
}

.footer__dash1 {
  grid-area: dash1;
  margin: 0;
  height: 1px;
  width: 100%;

  border: none;
  border-top: 1px dashed rgba($gray, 0.64);
}

.footer__dash2 {
  grid-area: dash2;
  margin: 0;
  height: 1px;
  width: 100%;

  border: none;
  border-top: 1px dashed rgba($gray, 0.64);
}

.footer__navigation {
  grid-area: nav;
  margin-bottom: 64px;

  @include notebook-tablet {
    margin-bottom: 40px;
  }

  @include mobile {
    display: none;
  }
}

.footer__contacts {
  grid-area: contacts;

  @include tablet {
    margin-top: 26px;
    margin-left: auto;
  }
}

.footer__socials {
  grid-area: socials;
  margin-top: 32px;
  margin-bottom: 32px;

  @include tablet {
    margin-left: auto;
  }
}

.footer__slogan {
  grid-area: slogan;
  display: flex;
  margin-top: 35px;
  margin-bottom: 35px;

  font-weight: 500;
  font-size: 40px;
  line-height: 40px;

  color: rgba($gray, 0.4);

  @include mobile {
    margin-bottom: 16px;
    margin-top: 16px;

    font-size: 24px;
    line-height: 32px;
  }
}

.footer__name {
  grid-area: name;
  margin: 0;
  padding: 0;

  font-size: 14px;
  line-height: 14px;
  color: $gray;

  @include mobile {
    margin-top: 16px;
    margin-bottom: 16px;
  }
}

.footer__policy {
  grid-area: policy;

  font-size: 14px;
  line-height: 14px;
  @include link;
  color: $gray;

  @include mobile {
    margin-top: 16px;
    margin-bottom: 16px;
  }
}
</style>
