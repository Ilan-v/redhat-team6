<script setup>
import ImageBlob from '../components/ImageBlob.vue'
import { onMounted, onUnmounted } from 'vue'
import { gsap } from "gsap";
import HelpCarousel from "@/components/HelpCarousel/HelpCarousel.vue";
import axios from 'axios';
import { ref } from 'vue';
import { useDebounceFn } from '@vueuse/core'

const timeline = gsap.timeline({ paused: true, defaults: { duration: 2 } });

const homePosts = ref([]);
const notHomePosts = ref([]);

onMounted(async () => {
  const { data } = await axios.get('http://127.0.0.1:8000/allHelp/');

  homePosts.value = data.posts.filter(post => post.location === 'מהבית');
  notHomePosts.value = data.posts.filter(post => post.location !== 'מהבית');

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

const searchText = ref('');

const debouncedSearchFn = useDebounceFn(async () => {
  const { data } = await axios.get(`http://127.0.0.1:8000/searchHelp/${searchText.value}`);

  homePosts.value = data.posts.filter(post => post.location === 'מהבית');
  notHomePosts.value = data.posts.filter(post => post.location !== 'מהבית');
}, 1500, { maxWait: 5000 })

onUnmounted(() => {
  timeline.timeScale(3);
  timeline.reverse();
})
</script>

<template>
  <span class="relative">
    <i class="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
    <InputText v-model="searchText" placeholder="חיפוש" class="pl-10" @keydown="debouncedSearchFn" />
  </span>
  <div class="p-3 overflow-auto h-[90vh]">
    <ImageBlob id="top-blob" class="-z-10" image-url="/orange.png" no-shadow />
    <ImageBlob id="bottom-blob" class="-z-10" image-url="/orange.png" no-shadow />
    <div class="flex flex-col">
      <h3 class="text-3xl text-gray-800 font-normal">כללי</h3>
      <divider class="h-2 -mt-3 !h-1 !m-0" />
      <HelpCarousel :products="notHomePosts" />
    </div>
    <div>
      <h3 class="text-3xl text-gray-800 font-normal">מהבית</h3>
      <divider class="h-2 -mt-3 !h-1 !m-0" />
      <HelpCarousel :products="homePosts" />
    </div>
  </div>
</template>

<style scoped>
.p-divider.p-divider-horizontal:before {
  border-color: darkcyan;
}
</style>
