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

  <div v-if="showEmailInput" class="absolute inset-0 z-50 flex items-center justify-center bg-black/70">
    <div class="w-80 rounded-xl bg-white p-6 shadow-2xl">
      <h2 class="mb-4 text-lg font-bold text-zinc-900">Enviar foto</h2>

      <input v-model="email" type="email" placeholder="Introduza o seu email" class="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-black placeholder:text-zinc-400 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-200" />

      <div class="mt-4 flex justify-end gap-2">
        <button class="rounded bg-zinc-200 px-4 py-2 text-zinc-900" @click="showEmailInput = false">Cancelar</button>

        <button class="rounded bg-red-600 px-4 py-2 text-white" @click="confirmSend">Enviar</button>
      </div>
    </div>
  </div>

  <div v-if="showSuccess" class="absolute inset-0 z-50 flex items-center justify-center bg-black/70">
    <div class="rounded-xl bg-white px-8 py-6 text-center shadow-2xl">
      <p class="text-lg font-bold text-green-600">Email enviado com sucesso!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { useRouter } from "vue-router";
import { useMaskStore } from "@/stores/maskStore";
import { useFaceDetection } from "@/composables/useFaceDetection";
import AppBar from "@/components/AppBar.vue";
import ARCamera from "@/components/ARCamera.vue";
import MaskSelector from "@/components/MaskSelector.vue";

const email = ref("");
const showSuccess = ref(false);
const showEmailInput = ref(false);
const router = useRouter();
const maskStore = useMaskStore();
const { captureImage, switchCamera } = useFaceDetection();

function handleCapture() {
  showEmailInput.value = true;
}

async function confirmSend() {
  requestAnimationFrame(async () => {
    const dataUrl = captureImage();
    if (!dataUrl) return;

    const ok = await sendPhoto(email.value);

    if (ok) {
      showEmailInput.value = false;
      email.value = "";
      showSuccess.value = true;

      setTimeout(() => {
        showSuccess.value = false;
      }, 3000);
    }
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

async function sendPhoto(email) {
  const imageData = captureImage();

  if (!imageData) {
    alert("Erro ao capturar imagem");
    return false;
  }

  try {
    const response = await fetch("https://abettercity4you.cteesjal.pt/api/send-photo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        image: imageData,
      }),
    });

    const data = await response.json();

    return data.success === true;
  } catch (error) {
    console.error(error);
    alert("Erro de ligação à API");
    return false;
  }
}
</script>
