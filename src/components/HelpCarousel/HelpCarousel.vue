<script setup>
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import { ref, onMounted } from "vue";
import HelpItem from "@/components/HelpCarousel/HelpItem.vue";

defineProps({
  products: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="card" dir="ltr">
    <Carousel :value="products" :numVisible="4" :numScroll="1">
      <template #item="slotProps">
        <HelpItem v-bind="slotProps.data" />
      </template>
    </Carousel>
  </div>
</template>
