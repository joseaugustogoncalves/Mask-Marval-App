import { ref, onUnmounted } from "vue";
import * as faceapi from "face-api.js";

/**
 * SINGLETON: tudo em module-scope para garantir UMA única instância
 * mesmo que useFaceDetection() seja chamado em vários componentes.
 */
const videoRef = ref(null);
const canvasRef = ref(null);

const isModelLoaded = ref(false);
const isFaceDetected = ref(false);

const stream = ref(null);

const currentMaskImage = ref(null);
const maskCache = ref({});

let animationFrameId = null;
let running = false; // loop ativo?
let detecting = false; // evita concorrência durante await
let modelsLoading = false;

async function loadModels() {
  try {
    if (isModelLoaded.value || modelsLoading) return;
    modelsLoading = true;

    console.log("🔄 Carregando modelos...");
    const MODEL_URL = "https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/";

    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);

    isModelLoaded.value = true;
    console.log("✅ MODELOS CARREGADOS!");
  } catch (error) {
    console.error("❌ ERRO AO CARREGAR MODELOS:", error);
  } finally {
    modelsLoading = false;
  }
}

async function startCamera(facingMode = "user") {
  try {
    console.log("🎥 Iniciando câmara...", facingMode);

    // se já há stream, para antes
    if (stream.value) {
      stream.value.getTracks().forEach((t) => t.stop());
      stream.value = null;
    }

    stream.value = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode,
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
      audio: false,
    });

    if (videoRef.value) {
      videoRef.value.srcObject = stream.value;
      await videoRef.value.play();
      console.log("✅ CÂMARA OK!");
    }
  } catch (error) {
    console.error("❌ ERRO CÂMARA:", error);
  }
}

async function setMask(maskImageUrl) {
  try {
    if (!maskImageUrl) {
      currentMaskImage.value = null;
      return;
    }

    if (maskCache.value[maskImageUrl]) {
      currentMaskImage.value = maskCache.value[maskImageUrl];
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";

    await new Promise((resolve, reject) => {
      img.onload = () => {
        if (img.complete && img.naturalWidth > 0) {
          maskCache.value[maskImageUrl] = img;
          currentMaskImage.value = img;
          resolve();
        } else reject(new Error("Imagem inválida"));
      };
      img.onerror = reject;
      img.src = maskImageUrl;
    });

    console.log("✅ Máscara carregada!", currentMaskImage.value.naturalWidth, "x", currentMaskImage.value.naturalHeight);
  } catch (error) {
    console.error("❌ Erro ao definir máscara:", error);
  }
}

function drawMaskCanvas(ctx, landmarks) {
  if (!currentMaskImage.value || !currentMaskImage.value.complete) return;

  const jaw = landmarks.getJawOutline();

  // extremos da cara
  const left = jaw[0];
  const right = jaw[16];
  const chin = jaw[8];

  const nose = landmarks.getNose();
  const noseTop = nose[0];

  const faceWidth = right.x - left.x;
  const faceHeight = chin.y - noseTop.y;

  // aumentar para cobrir toda a face
  const maskWidth = faceWidth * 1.8;
  const maskHeight = faceHeight * 2.2;

  const x = left.x - faceWidth * 0.4;
  const y = noseTop.y - faceHeight * 0.9;

  ctx.drawImage(currentMaskImage.value, x, y, maskWidth, maskHeight);
}
async function detectFaceLoop() {
  if (!running) return;

  if (detecting) {
    animationFrameId = requestAnimationFrame(detectFaceLoop);
    return;
  }
  detecting = true;

  try {
    const video = videoRef.value;
    const canvas = canvasRef.value;

    if (!video || !canvas || !isModelLoaded.value) return;
    if (video.videoWidth === 0 || video.videoHeight === 0) return;

    // Ajusta canvas ao tamanho do elemento
    const rect = canvas.getBoundingClientRect();
    const nextW = Math.round(rect.width);
    const nextH = Math.round(rect.height);
    if (canvas.width !== nextW || canvas.height !== nextH) {
      canvas.width = nextW;
      canvas.height = nextH;
      console.log("📐 Canvas redimensionado:", canvas.width, "x", canvas.height);
    }

    const ctx = canvas.getContext("2d");

    // ✅ 1) Primeiro faz a deteção (SEM desenhar nada)
    const detections = await faceapi.detectSingleFace(video, new faceapi.TinyFaceDetectorOptions({ inputSize: 320, scoreThreshold: 0.5 })).withFaceLandmarks();

    if (!running) return;

    // ✅ 2) Agora sim: limpa e desenha TUDO (fica visível até ao próximo resultado)
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // azul debug (agora também pós-await)
    //ctx.fillStyle = "rgba(0,255,255,0.9)";
    //ctx.fillRect(20, 20, 80, 80);

    if (detections) {
      isFaceDetected.value = true;

      // selfie: vídeo espelhado por CSS (-scale-x-100), então espelhamos o desenho
      ctx.save();
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);

      // ✅ amarelo pós-await (agora vai ser visível)
      //ctx.fillStyle = "rgba(255,255,0,0.6)";
      //ctx.fillRect(20, 120, 220, 140);

      // landmarks no espaço do canvas
      const displaySize = { width: canvas.width, height: canvas.height };
      const resized = faceapi.resizeResults(detections, displaySize);

      drawMaskCanvas(ctx, resized.landmarks);

      ctx.restore();
    } else {
      isFaceDetected.value = false;
    }
  } catch (e) {
    console.error("❌ ERRO DETECÇÃO:", e);
  } finally {
    detecting = false;
    if (running) animationFrameId = requestAnimationFrame(detectFaceLoop);
  }
}

function startTracking() {
  if (running) {
    console.log("⚠️ tracking já está ativo");
    return;
  }
  running = true;
  detectFaceLoop();
}

function stopTracking() {
  running = false;
  detecting = false;
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  animationFrameId = null;

  // limpa canvas
  if (canvasRef.value) {
    const ctx = canvasRef.value.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);
  }
}

function captureImage() {
  const video = videoRef.value;
  const overlay = canvasRef.value;
  if (!video || !overlay) return null;

  const out = document.createElement("canvas");
  const ctx = out.getContext("2d");

  const w = overlay.width;
  const h = overlay.height;

  out.width = w;
  out.height = h;

  // aplicar filtro preto e branco
  ctx.filter = "grayscale(100%)";

  // 1) desenha o VÍDEO como object-cover + selfie (espelhado)
  const vw = video.videoWidth;
  const vh = video.videoHeight;

  const scale = Math.max(w / vw, h / vh);
  const dw = vw * scale;
  const dh = vh * scale;
  const dx = (w - dw) / 2;
  const dy = (h - dh) / 2;

  ctx.save();
  ctx.translate(w, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(video, dx, dy, dw, dh);
  ctx.restore();

  // 2) desenha o overlay (máscara)
  ctx.drawImage(overlay, 0, 0);

  return out.toDataURL("image/png");
}

async function switchCamera() {
  const currentFacingMode = stream.value?.getVideoTracks?.()[0]?.getSettings?.().facingMode || "user";
  const newFacingMode = currentFacingMode === "user" ? "environment" : "user";
  await startCamera(newFacingMode);
}

function stopCamera() {
  stopTracking();
  if (stream.value) {
    stream.value.getTracks().forEach((t) => t.stop());
    stream.value = null;
  }
}

export function useFaceDetection() {
  // onUnmounted aqui só vai correr para o componente que usa,
  // mas como é singleton, NÃO queremos parar a câmara/tracking automaticamente
  // (senão um unmount mata a instância usada noutro componente).
  // Então deixo só como helper opcional.
  onUnmounted(() => {});

  return {
    videoRef,
    canvasRef,
    isModelLoaded,
    isFaceDetected,
    currentMaskImage,
    loadModels,
    startCamera,
    startTracking,
    stopTracking,
    captureImage,
    switchCamera,
    stopCamera,
    setMask,
  };
}
