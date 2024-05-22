<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
</script>

<template>
  <nav class="flex gap-x-4 px-2 items-center w-full h-20 bg-white">
    <img class="h-[80%] -ml-2" src="/logo.png" alt="logo">
    <h1 class="text-6xl ml-4">בית חם</h1>
    <router-link
      v-for="route in router.getRoutes()"
      :key="route.name"
      :to="route.path"
      class="mt-6 text-lg"
      active-class="font-semibold"
    >
      {{ route.meta.displayName }}
    </router-link>
  </nav>
</template>
