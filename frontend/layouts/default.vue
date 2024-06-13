<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <section class="container mx-auto">
    <slot />
  </section>
  <SpeedInsights />
</template>
