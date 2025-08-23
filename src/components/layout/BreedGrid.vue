<script setup lang="ts">
import BreedCard from './BreedCard.vue'
import Pagination from './Pagination.vue'
</script>

<template>
  <div class="grid gap-4 grid-cols-1 md:grid-cols-3 mb-6">
    <BreedCard v-for="n in 6" v-bind:key="n" />
  </div>
  <Pagination />
</template>
