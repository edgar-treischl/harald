<!-- src/App.vue -->
<template>
  <v-app>
    <!-- Navbar (always visible) -->
    <Navbar />

    <!-- Main content will be rendered here -->
    <v-main>
      <router-view /> <!-- This is where the matched route content will go -->
    </v-main>
  </v-app>
</template>

<script setup>
import Navbar from './components/Navbar.vue';  // Ensure Navbar is available
</script>

<style scoped>
/* Global styles if needed */
</style>
