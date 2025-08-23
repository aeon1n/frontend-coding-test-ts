<script setup lang="ts">
import { getDogs } from '@/lib/api/dogs.ts'
import BreedCard from './BreedCard.vue'
import Pagination from './Pagination.vue'
import { onMounted, ref } from 'vue'
import type { Dog } from '@/lib/types/Dog'

const dogs = ref<Dog[]>([])

onMounted(async () => {
  dogs.value = await getDogs()
  console.log(dogs.value)
})
</script>

<template>
  <div class="grid gap-4 grid-cols-1 md:grid-cols-3 mb-6">
    <BreedCard
      v-for="dog in dogs"
      v-bind:key="dog.name"
      v-bind:breed="dog.name"
      v-bind:short-desc="dog.shortDesc"
      v-bind:src="dog.image"
    />
  </div>
  <Pagination />
</template>
