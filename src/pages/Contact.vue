<template>
  <v-container class="py-16">
    <v-row align="center" justify="center">

      <!-- Left Column: Minimal Text -->
      <v-col cols="12" md="4" class="mb-10 mb-md-0">
        <h2 class="text-h4 font-weight-bold mb-4">
          Get in Touch
        </h2>
        <p class="text-body-1 text-medium-emphasis">
          We'd love to hear from you. Fill out the form and we'll get back to you.
        </p>
      </v-col>

      <!-- Right Column: Contact Form -->
      <v-col cols="12" md="8">
        <v-card class="pa-8 elevation-8 rounded-lg">
          <h3 class="text-h6 font-weight-medium mb-6">
            Contact Form
          </h3>

          <v-form ref="contactForm" @submit.prevent="submitForm">

            <v-text-field
              v-model="form.name"
              name="name"
              label="Name"
              placeholder="Your full name"
              variant="outlined"
              class="mb-4"
              required
            />

            <v-text-field
              v-model="form.email"
              name="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              variant="outlined"
              class="mb-4"
              required
            />

            <v-textarea
              v-model="form.message"
              name="message"
              label="Message"
              placeholder="Write your message here..."
              variant="outlined"
              rows="4"
              class="mb-6"
              required
            />

            <v-btn type="submit" color="primary" block>
              Send Message
            </v-btn>

          </v-form>

          <!-- Success / Error Alerts -->
          <v-alert
            v-if="status === 'success'"
            type="success"
            class="mt-4"
            border="start"
          >
            Thank you! Your message has been sent.
          </v-alert>

          <v-alert
            v-if="status === 'error'"
            type="error"
            class="mt-4"
            border="start"
          >
            Oops! Something went wrong. Please try again.
          </v-alert>

        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const status = ref('') // '', 'success', 'error'

const submitForm = async () => {
  status.value = ''
  try {
    const res = await fetch('https://formspree.io/f/mbjeabyy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })
    if (res.ok) {
      status.value = 'success'
      form.value.name = ''
      form.value.email = ''
      form.value.message = ''
    } else {
      status.value = 'error'
    }
  } catch (e) {
    status.value = 'error'
  }
}
</script>

<style scoped>
.v-card {
  background-color: #fff;
}
</style>

