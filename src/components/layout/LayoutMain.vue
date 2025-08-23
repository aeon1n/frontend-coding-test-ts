<script setup lang="ts">
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import Sidebar from './Sidebar.vue'
import { ref, provide } from 'vue'

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

provide('toggleSidebar', toggleSidebar)
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <div class="flex flex-1 mt-14">
      <!-- Sidebar Desktop-->
      <aside class="hidden lg:block md:w-1/4">
        <Sidebar />
      </aside>
      <!-- Sidebar Mobile -->
      <aside
        class="fixed left-0 top-15 bottom-0 z-40 w-2/3 bg-white shadow-lg lg:hidden transition-transform duration-300 transform"
        v-bind:class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <Sidebar />
      </aside>
      <!-- Mobile Backdrop -->
      <div
        v-if="isSidebarOpen"
        class="fixed top-15 bottom-0 left-0 right-0 bg-black/25 z-30 lg:hidden transition-opacity duration-300 backdrop-blur-[1px]"
        v-on:click="isSidebarOpen = false"
      ></div>
      <main
        class="flex-1 p-6 sm:px-12 sm:py-6 font-display font-regular text-base text-neutral-600"
      >
        <router-view />
      </main>
    </div>
    <Footer />
  </div>
</template>
