<template>
  <div class="flex flex-col gap-1 mx-auto" style="min-height: 16rem; max-width: 20rem">
    <div dir="rtl" class="text-center mt-3 mb-3 text-xl font-semibold">פרטי פינוי</div>
    <div class="mb-4">
      <IconField>
        <InputIcon>
          <i class="pi pi-home" />
        </InputIcon>
        <InputText
          dir="rtl"
          id="input"
          v-model="OGAddress"
          type="text"
          placeholder="כתובת מגורים מקורית"
        />
      </IconField>
    </div>
    <div class="mb-4">
      <IconField>
        <InputIcon>
          <span class="material-symbols-outlined" style="font-size: 1rem"> apartment </span>
        </InputIcon>
        <InputText
          dir="rtl"
          id="input"
          v-model="newAddress"
          type="text"
          placeholder="כתובת מגורים חדשה"
        />
      </IconField>
    </div>
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

<script setup>
import { ref } from 'vue'

const OGAddress = ref()
const newAddress = ref()

const emit = defineEmits(['nextCallback', 'prevCallback'])
</script>
