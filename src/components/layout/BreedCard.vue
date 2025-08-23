<script setup lang="ts">
const props = defineProps({
  breed: { type: String, required: true },
  shortDesc: { type: String, required: true },
  src: { type: String, required: true },
})
</script>

<template>
  <div
    class="w-full bg-neutral-200 min-h-36 rounded-md overflow-hidden hover:cursor-pointer"
  >
    <div class="relative p-3">
      <img
        v-bind:src="src"
        alt="Photo of a dog"
        class="rounded-md max-h-50 w-full object-cover"
      />
      <div class="absolute top-6 right-6">
        <i class="text-white">
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
            class="w-5 hover:cursor-pointer hover:fill-red-500 hover:text-red-500 transition-colors hover:scale-130"
          >
            <path
              d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
            />
          </svg>
        </i>
      </div>
    </div>
    <div class="px-3 pb-3">
      <h2
        class="font-bold text-xl hover:text-indigo-500 ease-in-out duration-150"
      >
        {{ props.breed }}
      </h2>
      <h3 class="font-medium text-sm truncate">{{ shortDesc }}</h3>
    </div>
  </div>
</template>
