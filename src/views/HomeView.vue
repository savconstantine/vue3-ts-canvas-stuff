<template>
  <div class="flex justify-center items-center min-h-screen">
    <canvas ref="canvas" id="canvasID" width="200" height="100" class="bg-red-50"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

let canvasRef = ref("canvas");

onMounted(() => {
  let canvas = document.getElementById("canvasID")
  const canvasContext = canvas.getContext("2d");
  canvasContext.fillStyle = "black";
  canvasContext.font = "bold 18px Arial";
  canvasContext.fillText("Hello world", (canvas.width / 2) - 17, (canvas.height / 2) + 8);
});
</script>
