// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    tsConfig: {
      extends: "@tsconfig/strictest/tsconfig.json",
    },
  },
  css: ["~/assets/css/main.css", "remixicon/fonts/remixicon.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      contentfulSpaceId: process.env.CTF_SPACE_ID,
      contentfulAccessToken: process.env.CTF_CDA_ACCESS_TOKEN,
    },
  },
})
