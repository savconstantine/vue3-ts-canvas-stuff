<template>
  <div class="w-full min-h-screen">
    <div class="flex h-full w-full flex-row justify-between min-h-screen">
      <div
        class="flex h-full w-full justify-center items-center min-h-screen"
        v-for="canvasItem in canvasArray"
        :key="canvasItem.id"
      >
        <canvas
          :ref="setCanvasRef as VNodeRef"
          width="200"
          height="100"
          class="bg-red-50"
        ></canvas>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, VNodeRef } from "vue";

interface CanvasItem {
  id: string;
  text: string;
  width: number;
  height: number;
}

const canvasArray = ref<CanvasItem[]>([
  {
    id: "canvas1",
    text: "canvas text 1",
    width: 200,
    height: 100,
  },
  {
    id: "canvas2",
    text: "canvas text 2",
    width: 200,
    height: 100,
  },
]);

const canvasRefs = ref<HTMLCanvasElement[]>([]);

const setCanvasRef = (el : HTMLCanvasElement | null): void  => {
  if (el) {
    canvasRefs.value.push(el);
  }
};

onMounted(() => {
  drawCanvases();
})

const drawCanvases = (): void => {
  canvasRefs.value.forEach((canvas : HTMLCanvasElement, index: number): void => {
    const canvasContext = canvas.getContext("2d");
    if (canvasContext) {
      drawOnCanvas(canvasContext, index)
    }
  });
}

const drawOnCanvas = (canvasContext: CanvasRenderingContext2D, index: number): void => {
  canvasContext.fillStyle = "black";
  canvasContext.font = "bold 18px Arial";
  canvasContext.fillText(canvasArray.value[index].text, (canvasArray.value[index].width - 100) / 2, (canvasArray.value[index].height + 10) / 2);
}
</script>
