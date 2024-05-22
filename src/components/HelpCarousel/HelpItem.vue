<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';
import { ref, onMounted } from "vue";

const props = defineProps({
  id: String,
  title: String,
  description: String,
  numEvac: String,
  imgUrl: String,
});

const signUp = () => {
  console.log('added user ' + props.id)
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
      <p class="m-0 h-20 overflow-auto text-gray-600">
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
          label="רשמו אותי"
          class="w-30"
        />
      </div>
    </template>
  </Card>
</template>
