<template>
  <v-container class="py-12">
    <!-- Page Title -->
    <h2 class="text-h4 font-weight-bold text-center mb-8">
      Contact Us
    </h2>

    <!-- Contact Description -->
    <p class="text-body-1 text-center mb-10">
      We'd love to hear from you! Please fill out the form below to get in touch with us.
    </p>

    <!-- Contact Form -->
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="pa-8 elevation-6 rounded-lg">
          <v-form>
            <v-text-field
              label="Name"
              placeholder="Your Name"
              outlined
              dense
              class="mb-4"
              required
            />

            <v-text-field
              label="Email"
              placeholder="Your Email"
              outlined
              dense
              type="email"
              class="mb-4"
              required
            />

            <v-textarea
              label="Message"
              placeholder="Your Message"
              outlined
              dense
              rows="4"
              class="mb-4"
              required
            />

          <v-btn
            variant="outlined"
            color="grey-darken-2"
            block
            class="mt-4"
            large
          >
            Send Message
          </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Optional: form handling logic can be added here
</script>

<style scoped>
/* Optional: custom page styles */
</style>
