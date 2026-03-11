import { defineStore } from "pinia";
import { ref } from "vue";

export const useMaskStore = defineStore("mask", () => {
  const masks = ref([
    {
      id: "spiderman",
      name: "Web-Slinger",
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuANL-USBoI-J3A48wMau2jOA05AWKm5rR5HA2poeAFhR1XHMcuZUr4DzaP4mN8AEcyVxnzhQ_BInNgojKv5rHwcDjpFQkb15kX8ZfgSEL-NB91D8v9OALhMi93qqs7o6YKbKYhmLTF1du4Snp2fHTe1RZEvrhl1NfJ1DEIzCctC6NZAKl7eMEe1MdbvyCQyl0oG9Jj5nDwZsKxfZ49w8MG2sdibTUMVQdp6hfUs7uWUTEZnwL-0p2EZ9IelI67szsK3zjS0BAAvYJY",
      maskImage: "/masks/spiderman.png", // ← Caminho local
      active: false,
    },
    {
      id: "ironman",
      name: "Armored Avenger",
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLSEM5Gf5cCHAuQZFP994vHwBqyx6deGC0xEQFv-A5EmEArFGpLUasSJEBnZjJxohDWSVPifHAHtdJSroc4a4uZrw6FQNQAjI23w45efZ-pc9eX0KLSvqdyy9YMI_pb_b__BprX_mN9cmNyJfvYmVyBq8v7mda4Vnq7XRy3dVxlmiLlWOxeu3ofVG7D5QK-JoISyeDy4gnka1tKNu8YhzDTk3QfMbOiBxSCV_olx99SKLy2FVgSeLnHUjlgd6SwV7LUeIbQjTNzkc",
      maskImage: "/masks/ironman.png", // ← Caminho local
      active: true,
    },
    {
      id: "blackpanther",
      name: "Wakandan King",
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGCkS7_7e0NL2AfKxGsnkkW28XysSlDFbfM0ZiOYjmM3OBPImBoycWR3viJ6L1tZroznFl5JNBzhpJ0IlvFM-d34q0E8c1qUsPp0Q4BJyrpgR7-qen57bfSJwHRcRGMFwWYcDqEurJw85LFRCM_ZblWdZYI5zEPVb0Uchil_NYseBx8tYcHmm6AiNND6APrq8UKWy37AVGi9JHM_q4SrsiJzD5ac7k_XNdsLWM0d_qjZjGTYS0CuGWcIpcqCoJ5pPJuT4AQ9rAuak",
      maskImage: "/masks/blackpanther.png", // ← Caminho local
      active: false,
    },
    {
      id: "captainamerica",
      name: "First Avenger",
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6h7PSgmbFDYGJbpL4J0Zj5oPwQ1xLmv-kv25cGJ_WVlaiH5qY22yOEBmOEwYHN_O3LdCvVEMJbjO8Iv73EpjuhHctY4xItBOrB1N7S8wTVGltXPlz6oPEDwgrdDVIYOfRmlii1V-jEaTOOXqII8Sx6G7CrOyXrOnvQMyGV5mshmQ4_EW_bGTuuSCwPKThgOSlGnp6iD0qWCnRJ9gogmArf34YirJF45vemP0DMxMSik7i1iTJ8xhqEGRX1IhoKdCYKUxNGfux2Ig",
      maskImage: "/masks/captainamerica.png", // ← Caminho local
      active: false,
    },
    {
      id: "Batman",
      name: "Batman",
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6h7PSgmbFDYGJbpL4J0Zj5oPwQ1xLmv-kv25cGJ_WVlaiH5qY22yOEBmOEwYHN_O3LdCvVEMJbjO8Iv73EpjuhHctY4xItBOrB1N7S8wTVGltXPlz6oPEDwgrdDVIYOfRmlii1V-jEaTOOXqII8Sx6G7CrOyXrOnvQMyGV5mshmQ4_EW_bGTuuSCwPKThgOSlGnp6iD0qWCnRJ9gogmArf34YirJF45vemP0DMxMSik7i1iTJ8xhqEGRX1IhoKdCYKUxNGfux2Ig",
      maskImage: "/masks/batman.png", // ← Caminho local
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
