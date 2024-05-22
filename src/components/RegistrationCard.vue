<template>
  <div class="flex flex-col gap-1 mx-auto" style="min-height: 16rem; max-width: 20rem">
    <div class="text-center mt-3 mb-3 text-xl font-semibold">יצירת חשבון</div>
    <div class="mb-4">
      <IconField>
        <InputIcon>
          <i class="pi pi-user" />
        </InputIcon>
        <InputText id="input" v-model="firstName" type="text" placeholder="שם פרטי" />
      </IconField>
    </div>
    <div class="mb-4">
      <IconField>
        <InputIcon>
          <i class="pi pi-id-card" />
        </InputIcon>
        <InputText id="input" v-model="lastName" type="text" placeholder="שם משפחה" />
      </IconField>
    </div>
    <div class="mb-4">
      <IconField>
        <InputIcon>
          <i class="pi pi-envelope" />
        </InputIcon>
        <InputText id="email" v-model="email" type="email" placeholder="אימייל" />
      </IconField>
    </div>
    <div class="mb-4">
      <IconField>
        <InputIcon>
          <i class="pi pi-mobile" />
        </InputIcon>
        <InputMask id="phone" v-model="phoneNum" mask="9999999999" placeholder="מספר טלפון" />
      </IconField>
    </div>
    <div class="mb-4">
      <IconField>
        <Calendar
          v-model="birthDate"
          dateFormat="dd/mm/yy"
          placeholder="תאריך לידה"
          style="width: 17rem"
        />
        <InputIcon>
          <i class="pi pi-calendar" />
        </InputIcon>
      </IconField>
    </div>
    <div class="mb-4">
      <IconField>
        <InputIcon>
          <i class="pi pi-briefcase" />
        </InputIcon>
        <InputText id="input" v-model="profession" type="text" placeholder="מקצוע" />
      </IconField>
    </div>
    <div class="mb-4">
      <IconField>
        <InputIcon>
          <span class="material-symbols-outlined" style="font-size: 1rem"> transgender </span>
        </InputIcon>
        <SelectButton
          v-model="gender"
          :options="genderOptions"
          optionLabel="gender"
          dataKey="value"
          aria-labelledby="custom"
        >
          <template #option="slotProps">
            <i :class="slotProps.option.icon" style="font-size: 1.5rem; width: 3.6rem"></i>
          </template>
        </SelectButton>
      </IconField>
    </div>
    <div class="mb-4">
      <Password v-model="password" toggleMask placeholder="סיסמא" class="w-full" />
    </div>
    <div class="flex pt-4 justify-end">
      <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="emit('nextCallback')" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const firstName = ref()
const lastName = ref()
const email = ref()
const phoneNum = ref()
const birthDate = ref()
const profession = ref()
const password = ref()

const gender = ref(null)
const genderOptions = ref([
  { icon: 'pi pi-mars text-cyan-500', value: 'Male' },
  { icon: 'pi pi-venus text-fuchsia-400', value: 'Female' },
  { icon: 'pi pi-question text-amber-500', value: 'Other' }
])

const emit = defineEmits(['nextCallback'])
</script>
