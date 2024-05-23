<template>
    <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }">
    <div class="background-cube">
    <div class="flex flex-col gap-1 mx-auto" style="min-height: 16rem; max-width: 20rem">
      <div class="text-center mt-3 mb-3 text-xl font-semibold" style="margin-right: 1rem;">יצירת אירוע התנדבותי</div>
      <div class="mb-4">
        <IconField>
          <InputIcon>
            <i class="pi pi-user" />
          </InputIcon>
          <InputText id="input" v-model="eventName" type="text" placeholder="שם אירוע" />
        </IconField>
      </div>
      <div class="mb-4">
        <IconField>
          <InputIcon>
            <i class="pi pi-id-card" />
          </InputIcon>
          <InputText id="input" v-model="eventDescription" type="text" placeholder="תיאור אירוע" />
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
      <div class="card flex justify-center">
        <CascadeSelect v-model="selectedCity" invalid :options="countries" optionLabel="cname" optionGroupLabel="name"
            :optionGroupChildren="['states', 'cities']" style="margin-bottom: 1rem;margin-right: 3rem; min-width: 17rem" placeholder="Select a City" />
    </div>
      <div class="card flex justify-center">
        <Calendar v-model="dates" selectionMode="range" :manualInput="false" dateFormat="dd/mm/yy"
        style="margin-bottom: 1rem; margin-right: 3rem; width: 17rem;" />
    </div>
      <div class="mb-4">
        <IconField>
          <Calendar
            v-model="deleteDate"
            dateFormat="dd/mm/yy"
            placeholder="תאריך מחיקת האירוע"
            style="width: 17rem"
          />
          <InputIcon>
            <i class="pi pi-calendar" />
          </InputIcon>
        </IconField>
      </div>
      <div class="flex items-center text-center" style="margin-right: 3rem;direction: rtl;">
        <input type="checkbox" id="myCheckbox" v-model="isChecked">
        <label for="ingredient1" class="ml-2">  אני צריך מתנדבים </label>
    </div>
      <div class="mb-4" v-if="isChecked">
        <IconField>
          <InputIcon>
            <i class="pi pi-id-card" />
          </InputIcon>
          <InputText id="input" v-model="numVolunteers" type="text" placeholder="מספר מתנדבים" />
        </IconField>
      </div>
    <div class="flex pt-4 justify-between" style="margin-right: 3rem">
    <Button
    label="ביטול"
    severity="secondary"
    icon="pi pi-arrow-right"
    @click="emit('closeDialog')"
    />
    <Button label="יצירה" icon="pi pi-arrow-left" iconPos="right" @click="emit('nextCallback')" />
    </div>
    </div>
    </div>
    </Dialog>
  </template>
  
  <script setup>  
  import { ref } from 'vue'

  import IconField from 'primevue/iconfield'  
  
  const dates = ref();
  const isChecked = ref()
  const eventName = ref()
  const phoneNum = ref()
  const eventDescription = ref()
  const selectedCity = ref()
  const deleteDate = ref()
  const numVolunteers = ref()
 
const countries = ref([
    {
        name: 'צפון',
        states: [
            {
                cname: 'קריית שמונה'
            },
            {
                cname: 'חיפה'
            },
            {
                cname: 'משגב'
            },   {
                cname: 'נהריה'
            },  {
                cname: 'בית גאן'
            },   {
                cname: 'הקריות'
            },   {
                cname: 'עכו'
            },   {
                cname: 'מעלות'
            },   {
                cname: 'כפר ורדים'
            },   {
                cname: 'צפת'
            },   {
                cname: 'חורפיש'
            }, 
            {
                cname: 'מטולה'
            }
        ]
    },
    {
        name: 'מרכז',
        states: [
            {
                cname: 'רמת גן'
            },
            {
                cname: 'תל אביב'
            },
            {
                cname: 'אבן יהודה'
            },
            {
                cname: 'פתח תקווה'
            },
            {
                cname: 'גבעתיים'
            },
            {
                cname: 'רמת השרון'
            },
            {
                cname: 'הרצליה'
            },
            {
                cname: 'ראשון לציון'
            },
            {
                cname: 'רעננה'
            }
        ]
    },
    {
        name: 'דרום',
        code: 'US',
        states: [
            {
                cname: 'שדרות'
            },
            {
                cname: 'באר שבע'
            },
            {
                cname: 'אשדוד'
            },
            {
                cname: 'אשקלון'
            },
            {
                cname: 'בארי'
            },
            {
                cname: 'אילת'
            },
            {
                cname: 'כפר עזה'
            },
            {
                cname: 'נחל עוז'
            },
            {
                cname: 'מצפה רמון'
            }
        ]
    }
]);

  </script>