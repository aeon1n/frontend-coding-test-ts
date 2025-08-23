<script setup lang="ts">
import BreedCard from './BreedCard.vue'
import Pagination from './Pagination.vue'
</script>

<template>
  <div class="grid gap-4 grid-cols-1 md:grid-cols-3 mb-6">
    <BreedCard
      v-for="n in 6"
      v-bind:key="n"
      breed="Golden Retriever"
      origin="Germany, France"
      src="https://images.unsplash.com/photo-1544568100-847a948585b9"
    />
  </div>
  <Pagination />
</template>
