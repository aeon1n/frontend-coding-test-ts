<template>
  <div class="w-full flex items-center justify-center gap-2">
    <button class="bg-neutral-200 py-1 px-3 rounded-md font-bold text-md">
      &lt;
    </button>
    <template v-for="page in 3" v-bind:key="page">
      <button
        v-bind:class="{
          'bg-indigo-500 text-white': page === 1,
          'bg-gray-200': page !== 1,
          'py-1 px-3 rounded-md font-bold text-md': true,
        }"
      >
        {{ page }}
      </button>
    </template>
    <button class="bg-gray-200 py-1 px-3 rounded-md font-bold text-md">
      &gt;
    </button>
  </div>
</template>
