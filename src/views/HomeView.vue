<template>
  <div class="flex justify-center items-center min-h-screen">
    <canvas ref="canvasRef" width="200" height="100" class="bg-red-50"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

let canvasRef = ref();

onMounted(() => {
  const canvas = canvasRef.value;
  const canvasContext = canvas.getContext("2d");
  canvasContext.fillStyle = "black";
  canvasContext.font = "bold 18px Arial";
  canvasContext.fillText("Hello world", (canvas.width - 100) / 2, (canvas.height + 10) / 2);
});
</script>
