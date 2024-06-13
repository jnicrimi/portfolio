<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <section class="container mx-auto">
    <div class="flex flex-col justify-center items-center h-screen p-4">
      <slot />
    </div>
  </section>
  <SpeedInsights />
</template>
