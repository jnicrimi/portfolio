import { defineNuxtPlugin } from "#app"
// for development
import { createClient } from "contentful"
// for SSR, SSG
import contentful from "contentful"

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const createClientFunc =
    process.env.NODE_ENV === "development"
      ? createClient
      : contentful.createClient
  const client = createClientFunc({
    space: config.public.contentfulSpaceId,
    accessToken: config.public.contentfulAccessToken,
  })
  nuxtApp.provide("contentfulClient", client)
})
