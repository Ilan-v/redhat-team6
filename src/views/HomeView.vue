<script setup>
import { gsap } from "gsap";
import {onMounted, onUnmounted} from "vue";
import ImageBlob from "@/components/ImageBlob.vue";
import CompareArrows from '~icons/tdesign/arrow-up-down-3';
const timeline = gsap.timeline({paused: true, defaults: {duration: 2}});

onMounted(() => {
  timeline.fromTo('#top-blob', {
    left: -1000,
    top: -1000,
    rotate: 180,
  }, {
    left: -300,
    top: -200,
    rotate: 0,
  }).fromTo('#bottom-blob', {
    right: -1000,
    bottom: -1000,
    rotate: 180,
  }, {
    right: -300,
    bottom: -200,
    rotate: 0,
  }, -0.2)
  // .fromTo(".welcome-stag", {
  //   opacity: 0,
  //   y: -100,
  // }, {
  //   opacity: 1,
  //   y: 0,
  //   duration: 0.5,
  //   stagger: 0.2,
  //   ease: "back.out"
  // });

  timeline.play();
})

onUnmounted(() => {
  timeline.timeScale(3);
  timeline.reverse();
})
</script>

<template>
  <main class="px-6 py-3">
    <ImageBlob id="top-blob" class="z-20" image-url="https://www.bwh.co.il/wp-content/uploads/%D7%A1%D7%95%D7%92%D7%99-%D7%94%D7%AA%D7%A0%D7%93%D7%91%D7%95%D7%AA.jpg" />
    <ImageBlob id="bottom-blob" image-url="https://www.makorrishon.co.il/wp-content/uploads/2023/10/2.jpeg" />
    <h2 class="welcome-stag text-5xl">אז קצת עלינו ...</h2>
    <p class="welcome-stag text-xl mr-3 w-[70%]">
      לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.

      ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.

      קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית.
    </p>
    <div class="welcome-stag flex items-center -mt text-lg mx-auto text-center w-fit">
      <router-link class="action-link -translate-y-[4.4rem]">אני מעוניין לעזור!</router-link>
      <CompareArrows class="text-orange-200 text-[18rem] rotate-90"/>
      <router-link to="/register" class="action-link translate-y-[4rem]">אני אשמח לעזרה</router-link>
    </div>
  </main>
</template>

<style scoped>
.action-link {
  @apply text-4xl w-[7rem] p-2 text-center transition-all hover:scale-110 hover:bg-orange-200/20 rounded-xl
}
</style>