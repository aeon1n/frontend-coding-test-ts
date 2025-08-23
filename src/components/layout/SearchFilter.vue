<script lang="ts" setup>
const dogTypes = [
  'small dog',
  'medium dog',
  'big dog',
  'friendly',
  'lazy',
  'active',
  'curious',
  'fluffy',
]

const dogSizes = [
  { id: 'sm-dog', label: '0 - 10 kilograms' },
  { id: 'md-dog', label: '11 - 25 kilograms' },
  { id: 'lg-dog', label: '26+ kilograms' },
]
</script>

<template>
  <!-- Filtering breeds: future enhancement, skipped for this challenge -->
  <!-- Search -->
  <input
    id="searchBreed"
    type="search"
    name="searchBreed"
    class="bg-neutral-300 py-2 px-3 rounded-full w-full font-bold text-neutral-600 placeholder:font-semibold"
    placeholder="Search Dogs..."
  />

  <!-- Temprament Chips -->
  <div class="mt-4">
    <h3 class="font-bold text-md">Temprament</h3>
    <div class="w-full flex flex-wrap gap-2 text-xs mt-1.5">
      <div
        v-for="(dog, index) in dogTypes"
        v-bind:key="index"
        v-bind:class="{ 'bg-indigo-500 text-white': index % 2 !== 0 }"
        class="py-1 px-2 border-2 rounded-full border-indigo-500 text-indigo-500 font-bold ease-in-out duration-150 hover:cursor-pointer hover:bg-indigo-500 hover:text-white"
      >
        {{ dog }}
      </div>
    </div>
  </div>

  <!-- Weight Checkboxes -->
  <!-- TODO: Add "tick" icon to checkbox ; fix label not selecting-->
  <div class="mt-4">
    <h3 class="font-bold text-md">Weight</h3>
    <div class="flex flex-col gap-1.5 mt-1.5">
      <div
        v-for="size in dogSizes"
        v-bind:key="size.id"
        class="flex items-center space-x-2"
      >
        <input
          v-bind:id="size.id"
          type="checkbox"
          v-bind:value="size.label"
          class="appearance-none w-4 h-4 border-2 border-indigo-500 rounded-sm bg-neutral-200 checked:bg-indigo-500 checked:border-indigo-500 cursor-pointer"
        />
        <label v-bind:for="size.id" class="font-semibold cursor-pointer">
          {{ size.label }}
        </label>
      </div>
    </div>
  </div>

  <!-- Height -->
  <div class="mt-4">
    <h3 class="font-bold text-md mb-2">Height</h3>
    <div class="flex flex-col sm:flex-row sm:items-center gap-1 md:gap-3">
      <!-- Min Height -->
      <div class="flex items-center gap-1 flex-1 min-w-[80px]">
        <input
          id="minHeight"
          type="number"
          name="minHeight"
          placeholder="Min"
          class="w-full py-2 px-3 rounded-full bg-neutral-300 text-neutral-600 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <span class="text-gray-700 font-semibold">cm</span>
      </div>
      <!-- Max Height -->
      <div class="flex items-center gap-1 flex-1 min-w-[80px]">
        <input
          id="maxHeight"
          type="number"
          name="maxHeight"
          placeholder="Max"
          class="w-full py-2 px-3 rounded-full bg-neutral-300 text-neutral-600 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <span class="text-gray-700 font-semibold">cm</span>
      </div>
    </div>
  </div>
  <div class="mt-6">
    <h3 class="font-bold text-md mb-2">Quick Links</h3>
    <ul class="flex flex-col gap-1">
      <li
        class="flex gap-1 font-semibold hover:text-indigo-500 hover:cursor-pointer"
      >
        <i>
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
            <path
              d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
            />
          </svg> </i
        >My Favorite Dogs
      </li>
      <li
        class="flex gap-1 font-semibold hover:text-indigo-500 hover:cursor-pointer"
      >
        <i>
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
            <rect width="12" height="12" x="2" y="10" rx="2" ry="2" />
            <path
              d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"
            />
            <path d="M6 18h.01" />
            <path d="M10 14h.01" />
            <path d="M15 6h.01" />
            <path d="M18 9h.01" /></svg></i
        >Random Dog
      </li>
      <li
        class="flex gap-1 font-semibold hover:text-indigo-500 hover:cursor-pointer"
      >
        <i>
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
            <path d="M12 16v-4" />
            <path d="M12 8h.01" /></svg></i
        >About Pawpedia
      </li>
    </ul>
  </div>
</template>
