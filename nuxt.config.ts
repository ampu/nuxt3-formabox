// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
import pugPlugin from 'vite-plugin-pug'

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  ssr: false,
  pages: false,
  modules: [
    `@pinia/nuxt`,
    `nuxt-swiper`,
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
  vite: {
    plugins: [
      svgLoader(),
      pugPlugin(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: /* language=scss */ `
            @import "normalize.css/normalize.css";
            @import "@/assets/styles/fonts";
            @import "@/assets/styles/variables";
            @import "@/assets/styles/mixins";
            @import "@/assets/styles/globals";
          `,
        }
      }
    }
  },
})
