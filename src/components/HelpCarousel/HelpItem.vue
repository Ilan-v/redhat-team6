<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';
import EventCard from '../EventCard.vue';
import { ref, onMounted } from "vue";
const dialog = ref(null)
const props = defineProps({
  id: String,
  title: String,
  description: String,
  numEvac: Number,
  imgUrl: String,
});

const signUp = () => {
  dialog.value.showDia();
}
</script>

<template>
  <Card
    class="overflow-hidden m-2 w-[18rem]"
    dir="rtl"
    :pt="{
      header: {class: 'flex justify-center'},
      body: {class: 'py-3'},
    }"
  >
    <template #header>
      <img class="w-full h-40 object-cover border-round" alt="photo" :src="imgUrl" />
    </template>
    <template #title>{{ title }}</template>
    <template #content>
      <p class="m-0 w-full h-20 overflow-auto text-gray-600">
        {{ description }}
      </p>
    </template>
    <template #footer>
      <div class="flex justify-between gap-3 mt-1">
        <div class="text-gray-400 text-sm">
          10/{{numEvac}}
        </div>
        <Button
          @click="signUp"
          label=" מידע נוסף"
          class="w-30"
        />
      </div>
    </template>
  </Card>
  <EventCard ref="dialog" :event-id="id" :title="title" :description="description" :num-evac="numEvac" :img-url="imgUrl" />
</template>
