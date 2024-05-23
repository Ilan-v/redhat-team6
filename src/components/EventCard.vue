<template>
    <div>
        <Dialog dismissableMask="true" v-model:visible="visible" modal :header="eventId" :style="{ width: '50rem', height: '150rem' }">
            <template #header>
                <div class="w-full h-50 object-cover border-round">
                    <img class="w-full h-40 object-cover border-round" alt="photo" src="/heart.png" />
                    <span class="font-bold mb-2" style="font-size:x-large;">{{ title }}</span>
                </div>
            </template>
                <div>
                    <div class="m-0 h-20 overflow-auto text-gray-600">
                        <p class="mb-5">{{ description }}</p>
                    </div>
                </div>
            <template #footer>
                <div class="flex flex-col justify-between gap-3 mt-1">
                    <div class="text-gray-400 text-sm">
                        10/{{ numEvac }}
                    </div>
                    <Button @click="signUp" label="רשמו אותי" class="w-30" />
                </div>
            </template>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);

const showDia = () => {
    visible.value = true
}

const signUp = () => {
    console.log('added user ' + eventId);
}

defineProps({
    eventId: String,
    title: String,
    description: String,
    numEvac: String,
    imgUrl: String,
});

defineExpose({
    showDia
})
</script>
