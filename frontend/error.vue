<script setup lang="ts">
const error = useError()
</script>

<template>
  <NuxtLayout>
    <h1 class="text-8xl pb-4">{{ error.statusCode }}</h1>
    <ul class="menu menu-lg bg-base-200 rounded-box">
      <li>
        <NuxtLink to="/"><i class="ri-home-3-fill text-2xl"></i></NuxtLink>
      </li>
    </ul>
  </NuxtLayout>
</template>
