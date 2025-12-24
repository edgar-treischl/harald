<template>
  <v-container class="py-16">
    <v-row align="center" justify="center">

      <!-- Left Column: Minimal Text -->
      <v-col cols="12" md="4" class="mb-10 mb-md-0">
        <h2 class="text-h4 font-weight-bold mb-4">
          Get in Touch
        </h2>
        <p class="text-body-1 text-medium-emphasis">
          I'd love to hear from you. Fill out the form and I'll get back to you.
        </p>
      </v-col>

      <!-- Right Column: Contact Form -->
      <v-col cols="12" md="8">
        <v-card class="pa-8 elevation-8 rounded-lg">
          <h3 class="text-h6 font-weight-medium mb-6">
            Leave me a Message
          </h3>

          <!-- Bind key to force re-render and fully reset validation -->
          <v-form
            :key="formKey"
            ref="contactForm"
            @submit.prevent="submitForm"
            v-model="valid"
          >

            <!-- Name -->
            <v-text-field
              v-model="form.name"
              name="name"
              label="Name"
              placeholder="Your full name"
              variant="outlined"
              class="mb-4"
              :rules="[rules.required]"
            />

            <!-- Email -->
            <v-text-field
              v-model="form.email"
              name="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              variant="outlined"
              class="mb-4"
              :rules="[rules.required, rules.email]"
            />

            <!-- Message -->
            <v-textarea
              v-model="form.message"
              name="message"
              label="Message"
              placeholder="Write your message here..."
              variant="outlined"
              rows="4"
              class="mb-6"
              :rules="[rules.required]"
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

// Form data
const form = ref({
  name: '',
  email: '',
  message: ''
})

// Form status: '', 'success', 'error'
const status = ref('')

// Form validity
const valid = ref(false)

// Form key to force re-render after submission
const formKey = ref(0)

// Simple validation rules
const rules = {
  required: value => !!value || 'This field is required.',
  email: value => value.includes('@') || 'Please enter a valid email.'
}

// Submit handler
const submitForm = async () => {
  // Prevent submission if invalid
  if (!valid.value) {
    status.value = ''
    return
  }

  try {
    // Send form data to Formspree
    const res = await fetch('https://formspree.io/f/mbjeabyy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })

    if (res.ok) {
      status.value = 'success'

      // Reset form fields
      form.value = { name: '', email: '', message: '' }

      // Force re-render of the form to fully clear validation
      formKey.value += 1

      valid.value = false

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

