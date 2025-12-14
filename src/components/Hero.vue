<template>
  <v-main>
    <v-container fluid class="pa-0">
      <v-row class="py-12" align="center" justify="space-between">
        <!-- Text Column -->
        <v-col cols="12" md="7" class="text-center text-md-right">
          <h1 class="display-2 font-weight-bold mb-3 text-center text-md-right">
            Edgar J. Treischl
          </h1>
          <h2 class="subtitle-1 font-weight-medium text-uppercase mb-4 text-center text-md-right">
            Data Scientist
          </h2>

          <!-- Social Links -->
          <v-row class="d-flex justify-center justify-md-end gap-4 mb-4" no-gutters>
            <v-btn
              v-for="(link, index) in socialLinks"
              :key="index"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              icon
              :aria-label="link.label"
              class="text-grey darken-2 transition-transform transform hover:scale-110"
            >
              <v-icon>{{ link.icon }}</v-icon>
            </v-btn>
          </v-row>

          <!-- Description -->
          <p class="body-1 text-subtitle-2 mb-6 text-center text-md-right">
            I am a social scientist focused on evaluation, survey research, and causality.
            As an R enthusiast, I also delve into topics like data visualization, NLP, and machine learning. 
            In my spare time, I enjoy jogging, swimming, and biking.
          </p>

          <!-- Action Link -->
          <v-btn
            to="/about"
            class="text-grey darken-2 font-weight-medium"
            text
            large
            rounded
            :aria-label="'Read more about ' + name"
          >
            Read More &rarr;
          </v-btn>
        </v-col>

        <!-- Image Column -->
        <v-col cols="12" md="5" class="d-flex justify-center">
          <v-img
            src="@/assets/images/circles.png"
            alt="Hero Image"
            class="rounded-lg"
            max-width="500"
            max-height="500"
            height="100%"
            width="100%"
            position="absolute"
            :style="{ objectFit: 'contain', zIndex: 0 }"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
// Social links and icons
import { ref } from 'vue';

const socialLinks = [
  { icon: 'mdi-github', url: 'https://github.com/edgar-treischl', label: 'GitHub' },
  { icon: 'mdi-google-scholar', url: 'https://scholar.google.com/citations?user=hOhulnUAAAAJ&hl=en', label: 'Google Scholar' },
  { icon: 'mdi-linkedin', url: 'https://www.linkedin.com/in/dr-edgar-treischl-b681791b2/?originalSubdomain=de', label: 'LinkedIn' },
  { icon: 'mdi-file-pdf-box', url: '/media/CV_Treischl.pdf', label: 'CV PDF' }
];
</script>

<style scoped>
/* Scoped styles for the Hero component */
.v-btn--icon {
  transition: transform 0.3s ease-in-out;
}

.v-btn--icon:hover {
  transform: scale(1.15);
}

.text-grey {
  color: #5f6368; /* A decent dark gray */
}

.text-grey.darken-2 {
  color: #424242;
}

.v-img {
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
}

.v-img:hover {
  transform: scale(1.05);
}

.v-row {
  position: relative;
}

.v-col {
  position: relative;
  z-index: 1;
}

.font-weight-medium {
  font-weight: 500 !important;
}

.display-2 {
  font-size: 4rem;
  letter-spacing: -0.5px;
}

.subtitle-1 {
  font-size: 1.5rem;
}

.body-1 {
  font-size: 1rem;
}

/* Custom padding/margins for better spacing */
.text-center {
  text-align: center;
}

.text-md-right {
  text-align: right;
}

/* Adding subtle background to the hero section */
.page-main {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(240, 240, 240, 0.9));
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
