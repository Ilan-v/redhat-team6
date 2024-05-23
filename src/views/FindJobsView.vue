<script setup>
import ImageBlob from '../components/ImageBlob.vue'
import {onMounted, onUnmounted} from 'vue'
import {gsap} from "gsap";
import HelpCarousel from "@/components/HelpCarousel/HelpCarousel.vue";

const timeline = gsap.timeline({paused: true, defaults: {duration: 2}});

onMounted(() => {
  timeline.fromTo('#top-blob', {
    left: -1000,
    bottom: -1000,
    rotate: 180,
  }, {
    left: -350,
    bottom: -200,
    rotate: -90,
  }).fromTo('#bottom-blob', {
    right: -1000,
    top: 3000,
    rotate: 180,
  }, {
    right: -350,
    top: -200,
    rotate: 40,
  }, -0.2)

  timeline.play();
})

onUnmounted(() => {
  timeline.timeScale(3);
  timeline.reverse();
})
</script>

<template>
  <div class="p-3 overflow-auto h-[90vh]">
  <ImageBlob id="top-blob" class="-z-10" image-url="/orange.png" no-shadow />
  <ImageBlob id="bottom-blob" class="-z-10" image-url="/orange.png" no-shadow />
    <div class="flex flex-col">
      <h3 class="text-3xl text-gray-800 font-normal">ספורט</h3>
      <divider class="h-2 -mt-3 !h-1 !m-0" />
      <HelpCarousel />
    </div>
    <div>
      <h3 class="text-3xl text-gray-800 font-normal">מהבית</h3>
      <divider class="h-2 -mt-3 !h-1 !m-0" />
      <HelpCarousel />
    </div>
  </div>
</template>

<style scoped>
.p-divider.p-divider-horizontal:before {
  border-color: darkcyan;
}
</style>
