<template>
  <div class="relative flex h-screen w-full flex-col overflow-hidden bg-black">
    <!-- Header -->
    <div class="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-gradient-to-b from-black to-transparent">
      <button @click="$router.back()" class="flex items-center justify-center size-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
        <span class="material-symbols-outlined text-white">arrow_back</span>
      </button>

      <h1 class="text-xl font-black italic tracking-tighter uppercase leading-none">Your <span class="text-primary italic">Hero</span></h1>

      <div class="size-10"></div>
    </div>

    <!-- Photo Preview -->
    <div class="flex-1 flex items-center justify-center p-6">
      <div class="relative max-w-lg w-full aspect-[3/4] rounded-2xl overflow-hidden comic-border comic-shadow">
        <img v-if="capturedPhoto" :src="capturedPhoto" alt="Captured hero photo" class="w-full h-full object-cover" />
        <div v-else class="w-full h-full bg-zinc-900 flex items-center justify-center">
          <span class="text-white/50">No photo captured</span>
        </div>

        <!-- Marvel Logo Overlay (opcional) -->
        <div class="absolute top-4 right-4 px-4 py-2 bg-primary rounded-lg">
          <span class="text-white font-black text-sm uppercase">Marvel</span>
        </div>
      </div>
    </div>

    <!-- Email Form -->
    <div class="relative bg-zinc-950 p-6 space-y-4">
      <div class="halftone-pattern absolute inset-0 opacity-10 pointer-events-none"></div>

      <div class="relative">
        <label class="block text-sm font-black uppercase tracking-widest text-zinc-500 mb-2"> Receive Your Hero Photo </label>
        <input v-model="email" type="email" placeholder="hero@marvel.com" class="w-full px-4 py-4 bg-zinc-900 border-2 border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:border-primary focus:outline-none transition-colors" />
      </div>

      <button @click="sendEmail" :disabled="!email || isSending" class="w-full py-4 bg-primary hover:bg-primary/90 disabled:bg-zinc-800 disabled:text-zinc-600 text-white font-black uppercase rounded-lg transition-all active:scale-95 shadow-[4px_4px_0px_0px_#000000] active:shadow-none">
        {{ isSending ? "Sending..." : "Send to Email" }}
      </button>

      <div class="flex gap-4">
        <button @click="downloadPhoto" class="flex-1 py-3 bg-white/10 hover:bg-white/20 text-white font-bold uppercase rounded-lg transition-colors">Download</button>
        <button @click="sharePhoto" class="flex-1 py-3 bg-white/10 hover:bg-white/20 text-white font-bold uppercase rounded-lg transition-colors">Share</button>
      </div>
    </div>

    <!-- iOS Home Indicator -->
    <div class="bg-zinc-950 flex justify-center pb-2 pt-1">
      <div class="h-1.5 w-36 rounded-full bg-white/20"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useMaskStore } from "@/stores/maskStore";

const maskStore = useMaskStore();
const { capturedPhoto } = storeToRefs(maskStore);

const email = ref("");
const isSending = ref(false);

async function sendEmail() {
  if (!email.value || !capturedPhoto.value) return;

  isSending.value = true;

  try {
    // Implementar API para enviar email
    // await fetch('/api/send-email', {
    //   method: 'POST',
    //   body: JSON.stringify({ email: email.value, image: capturedPhoto.value })
    // })

    console.log("Sending to:", email.value);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Email sent successfully! 🦸‍♂️");
  } catch (error) {
    console.error("Error sending email:", error);
    alert("Failed to send email");
  } finally {
    isSending.value = false;
  }
}

function downloadPhoto() {
  if (!capturedPhoto.value) return;

  const link = document.createElement("a");
  link.href = capturedPhoto.value;
  link.download = `marvel-hero-${Date.now()}.png`;
  link.click();
}

async function sharePhoto() {
  if (!capturedPhoto.value) return;

  try {
    const blob = await (await fetch(capturedPhoto.value)).blob();
    const file = new File([blob], "marvel-hero.png", { type: "image/png" });

    if (navigator.share) {
      await navigator.share({
        files: [file],
        title: "My Marvel Hero",
        text: "Check out my superhero mask!",
      });
    } else {
      alert("Sharing not supported on this device");
    }
  } catch (error) {
    console.error("Error sharing:", error);
  }
}
</script>
