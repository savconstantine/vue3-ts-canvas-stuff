<template>
  <div class="w-full min-h-screen">
    <div class="flex h-full w-full flex-row justify-between min-h-screen">
      <div class="flex h-full w-full justify-center items-center min-h-screen" v-for="canvasItem in canvasArray" :key="canvasItem.id">
        <canvas
          :id="canvasItem.id"
          width="200"
          height="100"
          class="bg-red-50"
        ></canvas>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {selectMany} from "../utils"


interface Book {
  name: string;
  authors: string[];
}

const books: Book[] = [
  {
    name: "Dune",
    authors: ["Gerbert"],
  },
  {
    name: "Harry Potter",
    authors: ["Rowling"],
  },
  {
    name: "Game of Thrones",
    authors: ["Martin"],
  },
];
// selectMany(books, (b) => b.authors);
console.log(selectMany(books, (b) => b.authors))

const canvasArray = ref([
  {
    id: "canvas1",
    text: "canvas text 1",
  },
  {
    id: "canvas2",
    text: "canvas text 2",
  },
]);

const setPropertiesToCanvasByItem = (item) => {
  console.log("setPropertiesToCanvasByItem", item)
  let canvas = document.getElementById(item.id);
  const canvasContext = canvas.getContext("2d");
  canvasContext.fillStyle = "black";
  canvasContext.font = "bold 18px Arial";
  canvasContext.fillText(
    item?.text ?? "hello world",
    canvas.width / 2 - 30,
    canvas.height / 2 + 8,
  );
};

onMounted(() => {
  for (let i = 0; i < canvasArray.value.length; i++) {
    setPropertiesToCanvasByItem(canvasArray.value[i]);
  }
});
</script>
