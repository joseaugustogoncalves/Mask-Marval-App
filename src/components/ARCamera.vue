<template>
  <div class="relative flex-1 bg-zinc-900 overflow-hidden">
    <video ref="videoElement" class="absolute inset-0 w-full h-full object-cover z-0 -scale-x-100" autoplay playsinline muted></video>
    <canvas ref="canvasElement" class="absolute inset-0 w-full h-full z-10 pointer-events-none"></canvas>

    <!-- Face Detection Overlay -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
      <div v-if="isFaceDetected" class="relative size-72 border-2 border-white/40 rounded-3xl">
        <div class="absolute -top-1 -left-1 size-8 border-t-4 border-l-4 border-primary rounded-tl-xl"></div>
        <div class="absolute -top-1 -right-1 size-8 border-t-4 border-r-4 border-primary rounded-tr-xl"></div>
        <div class="absolute -bottom-1 -left-1 size-8 border-b-4 border-l-4 border-primary rounded-bl-xl"></div>
        <div class="absolute -bottom-1 -right-1 size-8 border-b-4 border-r-4 border-primary rounded-br-xl"></div>
      </div>
    </div>

    <!-- HUD Overlay -->
    <div class="absolute bottom-4 left-6 pointer-events-none z-20">
      <p class="text-4xl font-black italic uppercase leading-none text-white/90">
        {{ isFaceDetected ? "Target" : "Searching" }}
      </p>
      <p class="text-2xl font-black italic uppercase leading-none text-primary">
        {{ isFaceDetected ? "Acquired" : "..." }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch } from "vue";
import { useFaceDetection } from "@/composables/useFaceDetection";
import { useMaskStore } from "@/stores/maskStore";
import { storeToRefs } from "pinia";

const maskStore = useMaskStore();
const { selectedMask } = storeToRefs(maskStore);

const { videoRef: videoElement, canvasRef: canvasElement, isFaceDetected, loadModels, startCamera, startTracking, setMask } = useFaceDetection();

async function init() {
  await loadModels();
  await startCamera("user");

  if (selectedMask.value?.maskImage) {

    const maskPath = `${import.meta.env.BASE_URL}${selectedMask.value.maskImage}`
    console.log("Setting mask:", maskPath);
    await setMask(maskPath);
  }

  startTracking();
  maskStore.setTracking(true);
}

onMounted(() => {
  init();
});

watch(
  selectedMask,
  async (newMask) => {
    const maskPath = `${import.meta.env.BASE_URL}${newMask?.maskImage}`;
    if (newMask?.maskImage) await setMask(maskPath);
  },
  { deep: true },
);
</script>
