<template>
  <div class="flex flex-col items-start w-full p-6 pb-8">
    <div class="flex flex-col items-center w-full p-6 space-y-8 mt-4">
      <div class="flex flex-col items-center space-y-3">
        <span class="text-base">Home</span>
        <button @click="goToAbout">About</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "../router";

export default defineComponent({
  name: "HomePage",
  methods: {
    goToAbout() {
      router.push("/about");
    },
  },
});
</script>
