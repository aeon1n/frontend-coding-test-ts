<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  currentPage: number
  totalPages: number
}>()

const emit = defineEmits<{ (e: 'change-page', page: number): void }>()

const visiblePages = computed(() => {
  const pages: number[] = [1]
  const maxToShow = 3

  const start = props.currentPage
  const end = Math.min(props.currentPage + maxToShow, props.totalPages)

  for (let i = start; i <= end; i++) {
    if (i != 1) {
      pages.push(i)
    }
  }
  return pages
})
</script>

<template>
  <div class="w-full flex items-center justify-center gap-2">
    <button
      class="bg-neutral-200 py-1 px-3 rounded-md font-bold text-md ease-in-out duration-300 hover:cursor-pointer hover:bg-indigo-500 hover:text-white"
      v-bind:disabled="props.currentPage === 1"
      v-on:click="emit('change-page', props.currentPage - 1)"
    >
      &lt;
    </button>
    <button
      v-for="page in visiblePages"
      v-bind:key="page"
      v-bind:class="{
        'bg-indigo-500 text-white': page === props.currentPage,
        'bg-gray-200 hover:bg-indigo-500 hover:text-white':
          page !== props.currentPage,
        'py-1 px-3 rounded-md font-bold text-md ease-in-out duration-300 hover:cursor-pointer': true,
      }"
      v-on:click="emit('change-page', page)"
    >
      {{ page }}
    </button>
    <button
      class="bg-gray-200 py-1 px-3 rounded-md font-bold text-md ease-in-out duration-300 hover:cursor-pointer hover:bg-indigo-500 hover:text-white"
      v-bind:disabled="props.currentPage === props.totalPages"
      v-on:click="emit('change-page', props.currentPage + 1)"
    >
      &gt;
    </button>
  </div>
</template>
