<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import IconAccountBox from '~icons/ic/baseline-align-vertical-bottom'
</script>

<template>
  <header>
    <NavBar />
    <div class="text-xl h-10 w-10 bg-green-300">Hello</div>
    <IconAccountBox class="text-xl text-purple-600" />
  </header>

  <RouterView />
</template>

<style scoped></style>
