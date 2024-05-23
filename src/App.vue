<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import IconAccountBox from '~icons/ic/baseline-align-vertical-bottom'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <router-view v-slot="{ Component }">
    <transition mode="out-in" name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
