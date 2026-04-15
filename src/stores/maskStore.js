import { defineStore } from "pinia";
import { ref } from "vue";

export const useMaskStore = defineStore("mask", () => {
  const masks = ref([
    {
      id: "spiderman",
      name: "Web-Slinger",
      thumbnail: "/Mask-Marval-App/masks/2.png",
      maskImage: "/masks/2.png", // ← Caminho local
      active: false,
    },
    {
      id: "ironman",
      name: "Armored Avenger",
      thumbnail: "/Mask-Marval-App/masks/ironman.png",
      maskImage: "/masks/ironman.png", // ← Caminho local
      active: true,
    },
    {
      id: "blackpanther",
      name: "Wakandan King",
      thumbnail: "/Mask-Marval-App/masks/3.png",
      maskImage: "/masks/3.png", // ← Caminho local
      active: false,
    },
    {
      id: "captainamerica",
      name: "First Avenger",
      thumbnail: "/Mask-Marval-App/masks/4.png",
      maskImage: "/masks/4.png", // ← Caminho local
      active: false,
    },
    {
      id: "Batman",
      name: "Batman",
      thumbnail: "/Mask-Marval-App/masks/5.png",
      maskImage: "/masks/5.png", // ← Caminho local
      active: false,
    },
  ]);

  const selectedMask = ref(masks.value[1]); // Iron Man por padrão
  const capturedPhoto = ref(null);
  const isTracking = ref(false);

  function selectMask(maskId) {
    masks.value.forEach((mask) => {
      mask.active = mask.id === maskId;
    });
    selectedMask.value = masks.value.find((m) => m.id === maskId);
  }

  function capturePhoto(imageData) {
    capturedPhoto.value = imageData;
  }

  function setTracking(status) {
    isTracking.value = status;
  }

  return {
    masks,
    selectedMask,
    capturedPhoto,
    isTracking,
    selectMask,
    capturePhoto,
    setTracking,
  };
});
