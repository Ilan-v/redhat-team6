<template>
  <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
    <div dir="rtl" class="text-center mt-3 mb-3 text-xl font-semibold">תחומי עניין?</div>
    <div class="flex flex-wrap justify-center gap-3">
      <ToggleButton v-model="option1" onLabel="מכוניות" offLabel="מכוניות" />
      <ToggleButton v-model="option2" onLabel="מחשבים" offLabel="מחשבים" />
      <ToggleButton v-model="option3" onLabel="ספורט" offLabel="ספורט" />
      <ToggleButton v-model="option4" onLabel="לימודים" offLabel="לימודים" />
      <ToggleButton v-model="option5" onLabel="פסיכולוגיה" offLabel="פסיכולוגיה" />
      <ToggleButton v-model="option6" onLabel="חקלאות" offLabel="חקלאות" />
      <ToggleButton v-model="option7" onLabel="מוזיקה" offLabel="מוזיקה" />
      <ToggleButton v-model="option8" onLabel="בישול" offLabel="בישול" />
    </div>
    <div class="flex pt-4 justify-between">
      <Button label="הבא" icon="pi pi-arrow-left" iconPos="left" @click="emit('nextCallback')" />
      <Button
        label="אחורה"
        severity="secondary"
        icon="pi pi-arrow-right"
        iconPos="right"
        @click="emit('prevCallback')"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const option1 = ref(false)
const option2 = ref(false)
const option3 = ref(false)
const option4 = ref(false)
const option5 = ref(false)
const option6 = ref(false)
const option7 = ref(false)
const option8 = ref(false)
</script>
