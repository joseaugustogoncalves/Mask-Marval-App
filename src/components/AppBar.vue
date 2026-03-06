<template>
  <div class="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-gradient-to-b from-black/80 to-transparent">
    <div class="flex items-center gap-3">
      <div :class="['size-3 rounded-full bg-primary', isTracking && 'animate-pulse']"></div>
      <span class="text-xs font-black tracking-widest uppercase italic">
        {{ isTracking ? "Tracking Active" : "No Target" }}
      </span>
    </div>

    <h1 class="text-xl font-black italic tracking-tighter uppercase leading-none">Mask <span class="text-primary italic">Lab</span></h1>

    <div class="flex gap-4">
      <button @click="$emit('openEmail')" class="flex items-center justify-center size-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
        <span class="material-symbols-outlined text-white">mail</span>
      </button>
      <button @click="$emit('switchCamera')" class="flex items-center justify-center size-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
        <span class="material-symbols-outlined text-white">flip_camera_ios</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useMaskStore } from "@/stores/maskStore";

const maskStore = useMaskStore();
const { isTracking } = storeToRefs(maskStore);

defineEmits(["openEmail", "switchCamera"]);
</script>
