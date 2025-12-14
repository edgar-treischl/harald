<template>
  <v-app-bar app color="white" dark elevate-on-scroll>
    <!-- App Title (left-aligned) -->
    <v-toolbar-title>
      <router-link to="/" class="text-h5 font-weight-bold text-gray-dark">
        My App
      </router-link>
    </v-toolbar-title>

    <!-- Spacer to push the buttons to the right -->
    <v-spacer></v-spacer>

    <!-- Navigation with Icons and Text -->
    <v-btn
      text
      to="/"
      class="d-flex align-center text-gray-dark"
      :class="{ 'v-btn--active': $route.path === '/' }"
      aria-label="Home"
    >
      <v-icon left class="text-gray-dark">mdi-home</v-icon>
      Home
    </v-btn>
    <v-btn
      text
      to="/about"
      class="d-flex align-center text-gray-dark"
      :class="{ 'v-btn--active': $route.path === '/about' }"
      aria-label="About"
    >
      <v-icon left class="text-gray-dark">mdi-information</v-icon>
      About
    </v-btn>
  </v-app-bar>
</template>

<script setup>
// No additional logic needed for this simple navbar
</script>

<style scoped>
/* Refine the navbar for a cleaner, modern look */
.v-toolbar-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.v-btn {
  padding: 8px 16px;  /* Adjust padding for a more spacious and balanced look */
}

.v-app-bar {
  box-shadow: none;  /* Remove default shadow for a flatter look */
}

.v-btn:hover {
  background-color: rgba(0, 0, 0, 0.06);  /* Subtle hover effect */
}

.v-btn--active {
  background-color: rgba(0, 0, 0, 0.1);  /* Highlight active button */
}

.v-icon {
  margin-right: 8px;  /* Space between icon and text */
}

.v-btn .v-icon {
  font-size: 20px;  /* Icon size */
}

/* Make sure gray color is consistent across text and icons */
.text-gray-dark {
  color: #5f6368; /* A decent dark gray */
}
</style>
