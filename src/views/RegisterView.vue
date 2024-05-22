<template>
  <div class="flex justify-center">
    <Stepper v-model:activeStep="active">
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
        <template #content="{ nextCallback }">
          <RegistrationCard @next-callback="nextCallback" />
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
          <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
            <div class="text-center mt-3 mb-3 text-xl font-semibold">Choose your interests</div>
            <div class="flex flex-wrap justify-center gap-3">
              <ToggleButton v-model="option1" onLabel="Nature" offLabel="Nature" />
              <ToggleButton v-model="option2" onLabel="Art" offLabel="Art" />
              <ToggleButton v-model="option3" onLabel="Music" offLabel="Music" />
              <ToggleButton v-model="option4" onLabel="Design" offLabel="Design" />
              <ToggleButton v-model="option5" onLabel="Photography" offLabel="Photography" />
              <ToggleButton v-model="option6" onLabel="Movies" offLabel="Movies" />
              <ToggleButton v-model="option7" onLabel="Sports" offLabel="Sports" />
              <ToggleButton v-model="option8" onLabel="Gaming" offLabel="Gaming" />
              <ToggleButton v-model="option9" onLabel="Traveling" offLabel="Traveling" />
              <ToggleButton v-model="option10" onLabel="Dancing" offLabel="Dancing" />
            </div>
          </div>
          <div class="flex pt-4 justify-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="prevCallback"
            />
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
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
          <div class="flex pt-4 justify-start">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
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

import { ref } from 'vue'

const active = ref(0)

const option1 = ref(false)
const option2 = ref(false)
const option3 = ref(false)
const option4 = ref(false)
const option5 = ref(false)
const option6 = ref(false)
const option7 = ref(false)
const option8 = ref(false)
const option9 = ref(false)
const option10 = ref(false)
</script>

<style scoped>
.p-stepper {
  flex-basis: 40rem;
}
</style>
