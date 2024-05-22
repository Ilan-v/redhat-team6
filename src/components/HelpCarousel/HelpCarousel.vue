<script setup>
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import { ref, onMounted } from "vue";
import HelpItem from "@/components/HelpCarousel/HelpItem.vue";
// import { ProductService } from '@/service/ProductService';
//
// onMounted(() => {
//   ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
// })


const products = ref([{
  id: '1000',
  title: 'היי',
  description: 'למה אני עושה את זה?',
  numEvac: 30,
  imgUrl: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg',
},{
  id: '100',
  title: 'שלום',
  description: 'למה אני עושה את זה?',
  numEvac: 30,
  imgUrl: 'https://letsenhance.io/static/66c1b6abf8f7cf44c19185254d7adb0c/28ebd/AiArtBefore.jpg',
},{
  id: '10',
  title: 'אני',
  description: 'למה אני עושה את זה?',
  numEvac: 30,
  imgUrl: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg',
},{
  id: '1',
  title: 'הלל',
  description: 'למה אני עושה את זה?',
  numEvac: 30,
  imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
},{
  id: '0',
  title: 'ביי',
  description: 'למה אני עושה את זה?',
  numEvac: 30,
  imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS1u05OPc7MSt9f5Dg2QMSbRPu_FHowIjog-jxeSwHIw&s ',
},]);
</script>

<template>
  <div class="card" dir="ltr">
    <Carousel
        :value="products"
        :numVisible="4"
        :numScroll="1"
        circular
    >
      <template #item="slotProps">
        <HelpItem v-bind="slotProps.data" />
      </template>
    </Carousel>
  </div>
</template>
