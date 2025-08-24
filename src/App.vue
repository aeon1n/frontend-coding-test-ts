<script setup lang="ts">
import Toast from './components/layout/Toast.vue'
</script>
<template>
  <div class="min-w-full min-h-screen font-sans text-sm antialiased">
    <router-view />
    <Toast />
  </div>
</template>
