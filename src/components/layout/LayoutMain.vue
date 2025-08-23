<script setup lang="ts">
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main
      class="flex-1 p-6 sm:px-12 sm:py-6 font-display font-regular text-base text-neutral-600 mt-14"
    >
      <router-view />
    </main>
    <Footer />
  </div>
</template>
