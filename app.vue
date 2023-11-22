<template lang="pug">
Html(lang="ru")
  Head
    Title Formabox
    Link(href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap" rel="stylesheet")

    Link(rel="preload" href="~/assets/fonts/GraphikLCG-Regular.woff2" as="font" type="font/woff2")
    Link(rel="preload" href="~/assets/fonts/GraphikLCG-RegularItalic.woff2" as="font" type="font/woff2")
    Link(rel="preload" href="~/assets/fonts/GraphikLCG-Medium.woff2" as="font" type="font/woff2")
    Link(rel="preload" href="~/assets/fonts/GraphikLCG-Bold.woff2" as="font" type="font/woff2")
  Body
    .header-with-hero
      AppHeader
      AppHero
    AppFooter
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.header-with-hero {
  position: relative;

  background: $black;
  color: $white;
}
</style>

