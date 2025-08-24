<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { Dog } from './../lib/types/Dog'
import { getDogs } from '@/lib/api/dogs.ts'

const route = useRoute()
const slug = route.params.slug as string
const dog = ref<Dog | null>(null)

onMounted(async () => {
  const breeds = await getDogs()
  dog.value =
    breeds.find((d) => d.name.toLowerCase().replace(/\s+/g, '-') === slug) ||
    null
})
</script>
<template>
  <div class="w-full">
    <router-link to="/">
      <button
        class="flex items-center gap-2 font-semibold hover:text-indigo-500 hover:cursor-pointer ease-in-out duration-150"
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
            class="w-4"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </i>
        Back to overview
      </button>
    </router-link>
  </div>
  <div class="flex flex-col md:flex-row md:gap-6">
    <img
      v-bind:src="dog?.image"
      v-bind:alt="`A picture of a ${dog?.name}`"
      class="rounded-md mt-3 self-start"
    />
    <div>
      <h1 class="font-bold text-3xl mt-3 mb-1.5">{{ dog?.name }}</h1>
      <p class="mb-3">{{ dog?.shortDesc }}</p>
      <h3 class="pb-3 font-bold text-lg">Personality Traits</h3>
      <div class="w-full grid grid-cols-3 gap-2 text-sm">
        <div
          v-for="p in dog?.personalityTraits"
          v-bind:key="p"
          class="bg-neutral-200 rounded-md p-3 font-bold"
        >
          {{ p }}
        </div>
      </div>
      <h3 class="pb-3 font-bold text-lg mt-3">Dog Facts</h3>
      <ul class="grid grid-cols-2 gap-2 text-sm">
        <li class="bg-neutral-200 rounded-md p-3">
          <span class="flex items-center font-medium gap-1">
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
              role="img"
            >
              <title>Dog Category</title>
              <path d="M11.25 16.25h1.5L12 17z" />
              <path d="M16 14v.5" />
              <path
                d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"
              />
              <path d="M8 14v.5" />
              <path
                d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"
              />
            </svg>
            {{ dog?.group }}
          </span>
        </li>
        <li class="bg-neutral-200 rounded-md p-3">
          <span class="flex items-center font-medium gap-1">
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
              class="w-5 rotate-90"
              role="img"
            >
              <title>Height</title>
              <path d="M12 15v-3.014" />
              <path d="M16 15v-3.014" />
              <path d="M20 6H4" />
              <path d="M20 8V4" />
              <path d="M4 8V4" />
              <path d="M8 15v-3.014" />
              <rect x="3" y="12" width="18" height="7" rx="1" />
            </svg>
            {{ dog?.height && (dog.height * 2.54).toFixed(1) + ' cm' }}
          </span>
        </li>
        <li class="bg-neutral-200 rounded-md p-3">
          <span class="flex items-center font-medium gap-1">
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
              role="img"
            >
              <title>Weight</title>
              <circle cx="12" cy="5" r="3" />
              <path
                d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"
              />
            </svg>
            {{ dog?.weight && (dog.weight * 0.453592).toFixed(1) + ' kg' }}
          </span>
        </li>
        <li class="bg-neutral-200 rounded-md p-3">
          <span class="flex items-center font-medium gap-1">
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
              role="img"
            >
              <title>Lifespan</title>
              <path
                d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"
              />
            </svg>
            <li>{{ dog?.lifespan }} Years</li>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
