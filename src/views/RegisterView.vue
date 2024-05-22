<template>
  <div class="flex justify-center">
    <Stepper v-model:activeStep="active" :pt="{ nav: { dir: 'rtl' } }">
      <StepperPanel>
        <template #header="{ index, clickCallback }">
          <button
            class="bg-transparent border-none inline-flex flex-col gap-2"
            @click="clickCallback"
          >
            <span
              :class="[
                'rounded-md border-2 w-[3rem] h-[3rem] inline-flex items-center justify-center',
                {
                  'bg-primaryborder-primary*500 dark:border-primary-400': index <= active,
                  'border-surface-200 dark:border-surface-700': index > active
                }
              ]"
            >
              <i class="pi pi-home" />
            </span>
          </button>
        </template>
        <template #content="{ nextCallback }">
          <div dir="rtl" class="text-center mt-3 mb-3 text-xl font-semibold">מפונה?</div>
          <SelectButton
            v-model="isEvacuated"
            :options="evacuatedOptions"
            option-label="text"
            aria-labelledby="basic"
            class="text-center"
          />
          <div v-if="evacStatus" dir="rtl">
            <div class="text-center mt-3 mb-3 text-l font-semibold">קוד מפונה מהעמותה:</div>
            <InputOtp
              dir="ltr"
              class="justify-center"
              v-model="verificationCode"
              @change="formatCode"
              :length="6"
            />
          </div>
          <div class="flex pt-4 justify-start">
            <Button
              dir="rtl"
              label="הבא"
              icon="pi pi-arrow-left"
              iconPos="right"
              :disabled="isValidEvac"
              @click="nextCallback"
            />
          </div>
        </template>
      </StepperPanel>

      <StepperPanel>
        <template #header="{ index, clickCallback }">
          <button
            class="bg-transparent border-none inline-flex flex-col gap-2"
            @click="clickCallback"
          >
            <span
              :class="[
                'rounded-md border-2 w-[3rem] h-[3rem] inline-flex items-center justify-center',
                {
                  'bg-primaryborder-primary*500 dark:border-primary-400': index <= active,
                  'border-surface-200 dark:border-surface-700': index > active
                }
              ]"
            >
              <i class="pi pi-user" />
            </span>
          </button>
        </template>
        <template #content="{ prevCallback, nextCallback }">
          <RegistrationCard @next-callback="nextCallback" @prev-callback="prevCallback" />
        </template>
      </StepperPanel>

      <StepperPanel v-if="evacStatus">
        <template #header="{ index, clickCallback }">
          <button
            class="bg-transparent border-none inline-flex flex-col gap-2"
            @click="clickCallback"
          >
            <span
              :class="[
                'rounded-md border-2 w-[3rem] h-[3rem] inline-flex items-center justify-center',
                {
                  'bg-primaryborder-primary*500 dark:border-primary-400': index <= active,
                  'border-surface-200 dark:border-surface-700': index > active
                }
              ]"
            >
              <span class="material-symbols-outlined" style="font-size: 1.4rem">
                location_away
              </span>
            </span>
          </button>
        </template>
        <template #content="{ prevCallback, nextCallback }">
          <EvacuatedRegistration @next-callback="nextCallback" @prev-callback="prevCallback" />
        </template>
      </StepperPanel>

      <StepperPanel>
        <template #header="{ index, clickCallback }">
          <button
            class="bg-transparent border-none inline-flex flex-col gap-2"
            @click="clickCallback"
          >
            <span
              :class="[
                'rounded-md border-2 w-[3rem] h-[3rem] inline-flex items-center justify-center',
                {
                  'bg-primaryborder-primary*500 dark:border-primary-400': index <= active,
                  'border-surface-200 dark:border-surface-700': index > active
                }
              ]"
            >
              <i class="pi pi-star" />
            </span>
          </button>
        </template>
        <template #content="{ prevCallback, nextCallback }">
          <ProfileLikes @next-callback="nextCallback" @prev-callback="prevCallback" />
        </template>
      </StepperPanel>

      <StepperPanel>
        <template #header="{ index, clickCallback }">
          <button
            class="bg-transparent border-none inline-flex flex-col gap-2"
            @click="clickCallback"
          >
            <span
              :class="[
                'rounded-md border-2 w-[3rem] h-[3rem] inline-flex items-center justify-center',
                {
                  'bg-primaryborder-primary*500 dark:border-primary-400': index <= active,
                  'border-surface-200 dark:border-surface-700': index > active
                }
              ]"
            >
              <i class="pi pi-id-card" />
            </span>
          </button>
        </template>
        <template #content="{ prevCallback }">
          <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
            <div class="text-center mt-3 mb-3 text-xl font-semibold">
              Account created successfully
            </div>
            <div class="flex justify-center">
              <img
                alt="logo"
                src="https://primefaces.org/cdn/primevue/images/stepper/content.svg"
              />
            </div>
          </div>
          <div class="flex pt-4 justify-end">
            <Button
              label="אחורה"
              severity="secondary"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="prevCallback"
            />
          </div>
        </template>
      </StepperPanel>
    </Stepper>
  </div>
</template>

<script setup>
import RegistrationCard from '../components/RegistrationCard.vue'
import EvacuatedRegistration from '../components/EvacuatedRegistration.vue'
import ProfileLikes from '../components/ProfileLikes.vue'

import { ref, computed } from 'vue'

const isEvacuated = ref()
const evacuatedOptions = ref([
  { text: 'כן', value: true },
  { text: 'לא', value: false }
])

const evacStatus = computed(() => (isEvacuated.value ? isEvacuated.value.value : false))

const isValidEvac = computed(
  () => evacStatus.value && verificationCode.value && verificationCode.value.length !== 6
)

const verificationCode = ref('')
const formatCode = () => {
  verificationCode.value = verificationCode.value.toUpperCase()
}

const active = ref(0)
</script>

<style scoped>
.p-stepper {
  flex-basis: 40rem;
}
</style>
