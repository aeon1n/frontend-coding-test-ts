<script setup lang="ts">
import { useToast } from '@/lib/composables/useToast.ts'
const { toasts } = useToast()
</script>
<template>
  <div class="fixed bottom-3 right-3 z-50">
    <div
      v-for="toast in toasts"
      v-bind:key="toast.id"
      class="toast px-3 py-1.5 rounded-full font-bold"
      v-bind:class="{
        'bg-green-400 text-green-900': toast.type === 'success',
        'bg-red-400 text-red-900': toast.type === 'error',
      }"
      v-bind:data-testid="
        toast.type === 'success' ? 'toast-success' : 'toast-error'
      "
    >
      <div class="flex items-center gap-1">
        <span v-if="toast.type === 'success'">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </span>
        <span v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
        </span>
        {{ toast.message }}
      </div>
    </div>
  </div>
</template>
