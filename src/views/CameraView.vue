<template>
  <div class="relative flex h-screen w-full flex-col overflow-hidden">
    <!-- Top Bar -->
    <AppBar @switch-camera="handleSwitchCamera" @open-email="handleOpenEmail" />

    <!-- AR Viewport -->
    <ARCamera />

    <!-- Control Panel -->
    <MaskSelector @capture="handleCapture" @open-gallery="handleOpenGallery" @open-effects="handleOpenEffects" />

    <!-- iOS Home Indicator -->
    <div class="bg-zinc-950 flex justify-center pb-2 pt-1">
      <div class="h-1.5 w-36 rounded-full bg-white/20"></div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useMaskStore } from "@/stores/maskStore";
import { useFaceDetection } from "@/composables/useFaceDetection";
import AppBar from "@/components/AppBar.vue";
import ARCamera from "@/components/ARCamera.vue";
import MaskSelector from "@/components/MaskSelector.vue";

const router = useRouter();
const maskStore = useMaskStore();
const { captureImage, switchCamera } = useFaceDetection();

function handleCapture() {
  requestAnimationFrame(() => {
    const dataUrl = captureImage();
    if (!dataUrl) return;
    downloadImage(dataUrl);
  });
}

function downloadImage(dataUrl) {
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = `mask-${Date.now()}.png`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function handleSwitchCamera() {
  switchCamera();
}

function handleOpenEmail() {
  router.push("/share");
}

function handleOpenGallery() {
  // Implementar galeria
  console.log("Open gallery");
}

function handleOpenEffects() {
  // Implementar efeitos
  console.log("Open effects");
}
</script>
