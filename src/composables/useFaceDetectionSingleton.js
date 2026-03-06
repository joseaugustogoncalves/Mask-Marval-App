import { useFaceDetection as create } from "@/composables/useFaceDetection";

let instance = null;

export function useFaceDetection() {
  if (!instance) instance = create();
  return instance;
}
