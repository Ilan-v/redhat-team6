<script setup>
import Button from "primevue/button"
</script>

<template>
  <main>
    <div class="text-2xl text-bold">זה הבית</div>
    <Button label="דךלכחשד"/>
  </main>
</template>

<template #option="slotProps">
  <i :class="slotProps.option.icon" style="font-size: 1.5rem; width: 3.6rem"></i>

<div class="flex pt-4 justify-between">
<Button
  label="אחורה"
  severity="secondary"
  icon="pi pi-arrow-right"
  @click="emit('prevCallback')"
/>
<Button label="הבא" icon="pi pi-arrow-left" iconPos="right" @click="emit('nextCallback')" />
</div>
</div>
</template>


