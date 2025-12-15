<!-- src/App.vue -->
<template>
  <v-app>
    <!-- Navbar (always visible) -->
    <Navbar />

    <!-- Main content will be rendered here -->
    <v-main>
      <router-view /> <!-- This is where the matched route content will go -->
    </v-main>

    <!-- Footer -->
    <Footer v-if="!isLandingPage" />
  </v-app>
</template>

<script setup>
import { computed } from 'vue'       // <--- IMPORT computed
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
const isLandingPage = computed(() => route.path === '/')
</script>

<style scoped>
/* Global styles if needed */
</style>
