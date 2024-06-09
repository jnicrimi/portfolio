// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    tsConfig: {
      extends: "@tsconfig/strictest/tsconfig.json",
    },
  },
  css: [
    '~/assets/css/main.css',
    'remixicon/fonts/remixicon.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
