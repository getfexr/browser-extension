<script setup lang="ts">
import NavbarComponent from "./components/NavbarComponent.vue";
</script>

<template>
  <div id="root">
    <NavbarComponent />
    <router-view />
  </div>
</template>

<style scoped>
#root {
  width: 350px;
  height: 300px;
}
</style>
