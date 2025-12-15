<template>
  <v-app-bar app color="white" elevate-on-scroll>
    <!-- Logo / Title -->
    <v-toolbar-title>
      <router-link to="/" class="flex items-center cursor-pointer">
        <img :src="Icon" alt="App Icon" class="app-icon" />
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Navigation -->
    <v-btn text :class="{ 'active-link': $route.path === '/' }" to="/">
      <v-icon left>mdi-home</v-icon>
      Home
    </v-btn>
    <v-btn text :class="{ 'active-link': $route.path === '/projects' }" to="/projects">
      <v-icon left>mdi-folder</v-icon>
      Projects
    </v-btn>
    <v-btn text :class="{ 'active-link': $route.path === '/about' }" to="/about">
      <v-icon left>mdi-information</v-icon>
      About
    </v-btn>
    <v-btn text :class="{ 'active-link': $route.path === '/contact' }" to="/contact">
      <v-icon left>mdi-email</v-icon>
      Contact
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import Icon from '@/assets/images/icon.png'
</script>

<style scoped>
.app-icon {
  width: 40px;
  height: 40px;
  transition: transform 0.3s;
}
.app-icon:hover {
  transform: scale(1.1);
}

.v-btn {
  padding: 8px 16px;
  color: #5f6368;
}
.v-btn:hover {
  background-color: rgba(0, 0, 0, 0.06);
}
.active-link {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
