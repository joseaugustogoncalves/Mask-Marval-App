<template>
  <div class="relative h-[40%] w-full bg-white dark:bg-zinc-950 flex flex-col border-t-4 border-white overflow-hidden">
    <!-- Halftone Texture -->
    <div class="absolute inset-0 halftone-pattern pointer-events-none opacity-10"></div>

    <!-- Header -->
    <div class="px-6 pt-6 pb-2">
      <h2 class="text-sm font-black uppercase tracking-widest text-zinc-500">Select Identity</h2>
    </div>

    <!-- Mask Cards -->
    <div class="flex-1 overflow-x-auto flex flex-nowrap items-center px-6 gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <button v-for="mask in masks" :key="mask.id" @click="selectMask(mask.id)" class="group flex flex-col items-center gap-3 shrink-0">
        <div :class="['size-24 rounded-2xl bg-rose-300 p-2 overflow-hidden transition-all', mask.active ? 'border-4 border-white shadow-[4px_4px_0px_0px_#ffffff]' : 'border-4 border-zinc-800 hover:border-white']">
          <div class="w-full h-full bg-cover bg-center rounded-lg transition-all" :style="{ backgroundImage: `url('${mask.thumbnail}')` }" />
        </div>

        <span :class="['text-xs font-black uppercase italic transition-colors', mask.active ? 'text-white' : 'text-zinc-500 hover:text-white']">
          <!-- {{ mask.name }} -->
        </span>
      </button>
    </div>

    <!-- Capture Bar -->
    <div class="relative h-32 flex items-center justify-center pb-6">
      <!-- Capture Button -->
      <button @click="$emit('capture')" class="group relative flex items-center justify-center size-20 rounded-full bg-white transition-transform active:scale-90">
        <div class="absolute inset-0 rounded-full border-4 border-white scale-110 group-active:scale-100 transition-transform"></div>
        <div class="size-16 rounded-full border-4 border-black bg-white flex items-center justify-center">
          <div class="size-12 rounded-full bg-primary/20 flex items-center justify-center">
            <span class="material-symbols-outlined text-black font-black text-xs">PRESS</span>
          </div>
        </div>
      </button>

      <!-- Gallery Preview -->
      <div v-if="capturedPhoto" @click="$emit('openGallery')" class="absolute left-8 size-12 rounded-lg border-2 border-white overflow-hidden comic-shadow rotate-[-6deg] cursor-pointer">
        <img :src="capturedPhoto" alt="Recent capture" class="w-full h-full object-cover" />
      </div>

      <!-- Effects Button -->
      <!-- <button @click="$emit('openEffects')" class="absolute right-8 flex flex-col items-center justify-center text-white/60 hover:text-white">
        <span class="material-symbols-outlined text-3xl">filter_vintage</span>
        <span class="text-[8px] font-black uppercase mt-1">Effects</span>
      </button> -->
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useMaskStore } from "@/stores/maskStore";

const maskStore = useMaskStore();
const { masks, capturedPhoto } = storeToRefs(maskStore);

defineEmits(["capture", "openGallery", "openEffects"]);

function selectMask(maskId) {
  //const maskPath = `${import.meta.env.BASE_URL}${selectedMask.value.maskImage}`
  //alert("Mask " + maskId + " selected!");
  maskStore.selectMask(maskId);
}
</script>
