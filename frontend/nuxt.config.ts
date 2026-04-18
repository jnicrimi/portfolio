import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@vercel/speed-insights/nuxt"],

  typescript: {
    tsConfig: {
      extends: "@tsconfig/strictest/tsconfig.json",
    },
  },

  css: ["~/assets/css/main.css", "remixicon/fonts/remixicon.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      contentfulSpaceId: process.env.CTF_SPACE_ID,
      contentfulAccessToken: process.env.CTF_CDA_ACCESS_TOKEN,
    },
  },

  compatibilityDate: "2024-08-03",
})
