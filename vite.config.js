import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],

      manifest: {
        name: "Marvel Mask AR",
        short_name: "Mask Lab",
        description: "AR Superhero Mask Camera",
        theme_color: "#000000",
        background_color: "#000000",
        start_url: "/Mask-Marval-App/",
        scope: "/Mask-Marval-App/",
        display: "standalone",

        icons: [
          {
            src: "/Mask-Marval-App/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/Mask-Marval-App/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  base: "/Mask-Marval-App/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
