<script setup lang="ts">
import BreedGrid from './../components/layout/BreedGrid.vue'
import { inject } from 'vue'

const toggleSidebar = inject<() => void>('toggleSidebar')
</script>

<template>
  <div class="w-full flex justify-between mb-6">
    <h1 class="text-2xl font-bold">Browse all Breeds</h1>
    <button
      class="lg:hidden bg-neutral-200 py-1 px-3 rounded-lg flex items-center gap-2 font-semibold cursor-pointer hover:bg-neutral-400 ease-in-out duration-300"
      v-on:click="toggleSidebar?.()"
    >
      <i
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4"
        >
          <path d="M14 17H5" />
          <path d="M19 7h-9" />
          <circle cx="17" cy="17" r="3" />
          <circle cx="7" cy="7" r="3" />
        </svg>
      </i>
      Filter
    </button>
  </div>
  <BreedGrid />
</template>
