<template>
  <div class="w-full min-h-screen">
    <div class="flex h-full w-full flex-col items-center justify-center min-h-screen">
      <span v-for="author in authors" :key="author">{{ author }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { selectMany } from "../utils"


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
  {
    name: "The Lord of the Rings",
    authors: ["Tolkien"],
  },
  {
    name: "The Hobbit",
    authors: ["Tolkien"],
  },
];

const authors = computed(() : string[] => selectMany(books, (b) => b.authors));

</script>
