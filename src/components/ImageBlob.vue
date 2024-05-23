<script setup>
defineProps({
  imageUrl: String,
  noShadow: Boolean,
})
</script>

<template>
  <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="-z10 h-[50rem] absolute overflow-visible"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 310 350"
  >
    <defs>
      <filter v-if="!noShadow" id="drop-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feOffset result="offOut" in="SourceGraphic" dx="10" dy="10" />
        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
      </filter>
      <clipPath id="blob-clip">
        <path
            d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111
               c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3
               c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9
               C77.5,309.9,111,343,156.4,339.5z"
        />
      </clipPath>
    </defs>
    <g filter="url(#drop-shadow)">
      <image
        x="0"
        y="0"
        width="100%"
        height="100%"
        :xlink:href="imageUrl"
        :style="{ clipPath: 'url(#blob-clip)' }"
        preserveAspectRatio="xMidYMid slice"
        filter="url(#drop-shadow)"
    />
    </g>
  </svg>
</template>

<style scoped>
.masked-image-container {
  width: 310px; /* or whatever dimensions you need */
  height: 350px; /* or whatever dimensions you need */
  overflow: hidden;
}

.blob {
  width: 100%;
  height: 100%;
}
</style>