<template>
  <div class="flex flex-col min-h-screen">
    <nav class="bg-indigo-600 text-white font-display">
      <div class="mx-auto px-6 sm:px-12">
        <div class="relative flex items-center justify-between h-15">
          <div class="flex-1 flex items-stretch justify-start">
            <div class="flex items-center h-full">
              <img
                class="h-10"
                src="../../assets/logo-zammad_white.png"
                alt="Zammad logo"
              />
              <span class="mx-2 font-regular text-2xl mt-1">|</span>
              <span class="font-semibold italic text-lg mt-1">Pawpedia</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <main
      class="flex-1 p-6 sm:px-12 sm:py-6 font-display font-regular text-base"
    >
      <router-view />
    </main>
    <footer class="py-2 bg-neutral-200 text-neutral-600 text-xs text-center">
      Made by Marcel Bialas with
      <span
        class="text-md hover:text-red-800 cursor-default ease-in-out duration-300"
        >♡</span
      >
    </footer>
  </div>
</template>
