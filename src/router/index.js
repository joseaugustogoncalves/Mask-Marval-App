import { createRouter, createWebHistory } from "vue-router";
import CameraView from "../views/CameraView.vue";
import ShareView from "../views/ShareView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "camera",
      component: CameraView,
    },
    {
      path: "/share",
      name: "share",
      component: ShareView,
    },
  ],
});

export default router;
