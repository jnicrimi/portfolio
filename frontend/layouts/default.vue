<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <section class="container mx-auto p-4">
    <slot />
  </section>
  <SpeedInsights />
</template>
