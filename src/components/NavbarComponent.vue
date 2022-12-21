<template>
  <nav class="bg-white border-gray-200 px-4 py-3 dark:bg-gray-900">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="https://getfexr.com/" target="_blank" class="flex items-center">
        <img
          src="/logo.svg"
          class="h-9 mr-3 dark:bg-white rounded-full p-1.5"
          alt="Fexr Logo"
        />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >FEXR</span
        >
      </a>
      <div class="flex order-2">
        <button
          class="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          @click="handleCTAButton"
        >
          Disconnect
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import router from "../router";

const handleCTAButton = () => {
  router.push("/connect");
};
</script>
