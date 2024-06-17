<script lang="ts" setup>
import { useAsyncData } from "#imports"
const { data } = await useAsyncData("status", async (nuxtApp) => {
  const { $contentfulClient } = nuxtApp
  return await $contentfulClient.getEntries({
    content_type: "status",
    order: "-sys.createdAt",
    limit: 1,
  })
})
const status = data.value ? data.value.items[0] : null
</script>

<template>
  <div class="pb-4">
    <h1 class="text-4xl">jnicrimi.com</h1>
  </div>
  <div class="avatar pb-4">
    <div class="w-64 rounded-xl">
      <img src="~/assets/img/avatar.png" alt="avatar" />
    </div>
  </div>
  <div class="pb-4" v-if="status">
    <div class="badge badge-neutral badge-outline badge-lg">
      {{ status.fields.name }}
    </div>
  </div>
  <ul class="menu menu-horizontal menu-lg bg-base-200 rounded-box">
    <li>
      <a href="https://github.com/jnicrimi"
        ><i class="ri-github-fill text-2xl"></i
      ></a>
    </li>
    <li>
      <a href="https://www.facebook.com/jnicrimi"
        ><i class="ri-facebook-box-fill text-2xl"></i
      ></a>
    </li>
    <li>
      <a href="https://x.com/imai"
        ><i class="ri-twitter-x-fill text-2xl"></i
      ></a>
    </li>
    <li>
      <a href="https://instagram.com/jnicrimi"
        ><i class="ri-instagram-fill text-2xl"></i
      ></a>
    </li>
  </ul>
</template>
