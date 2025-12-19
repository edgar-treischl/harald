<template>
  <v-main>
    <v-container fluid class="pa-0">
      <v-row class="py-12" align="center" justify="space-between">
        <!-- Image Column (Left) -->
        <v-col cols="12" md="5" class="d-flex justify-center">
          <v-img
            :src="heroImage"
            alt="Hero Image"
            class="rounded-lg"
            max-width="600"
            max-height="600"
            style="object-fit: contain;"
          />
        </v-col>

        <!-- Text Column (Right) -->
        <v-col cols="12" md="7" class="text-center text-md-left">
          <h1 class="display-2 font-weight-bold mb-3">
            Edgar J. Treischl
          </h1>
          <h2 class="subtitle-1 font-weight-medium text-uppercase mb-4">
            Data Scientist
          </h2>

          <!-- Social Links (icon-only, small, white hover) -->
          <v-row class="d-flex justify-center justify-md-start gap-4 mb-6" no-gutters>
            <v-btn
              v-for="(link, index) in socialLinks"
              :key="index"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              icon
              class="social-btn white--text"
              :aria-label="link.label"
            >
              <v-icon>{{ link.icon }}</v-icon>
            </v-btn>
          </v-row>

          <!-- Description -->
          <p class="body-1 text-subtitle-2 mb-6">
            I am a social scientist focused on evaluation, survey research, and causality.
            As an R enthusiast, I also delve into topics like data visualization, NLP, and machine learning. 
            In my spare time, I enjoy jogging, swimming, and biking.
          </p>

          <!-- Action Link -->
          <v-btn
            to="/about"
            text
            rounded
            color="grey-darken-2"
            large
            class="font-weight-medium"
          >
            Read More &rarr;
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
const heroImage = import.meta.env.BASE_URL + 'images/circles.png'

const socialLinks = [
  { icon: 'mdi-github', url: 'https://github.com/edgar-treischl', label: 'GitHub' },
  { icon: 'mdi-google', url: 'https://scholar.google.com/citations?user=hOhulnUAAAAJ&hl=en', label: 'Google' },
  { icon: 'mdi-linkedin', url: 'https://www.linkedin.com/in/dr-edgar-treischl-b681791b2/?originalSubdomain=de', label: 'LinkedIn' },
  { icon: 'mdi-file-pdf-box', url: `${import.meta.env.BASE_URL}CV_Treischl.pdf`, label: 'CV PDF' }
]
</script>

<style scoped>
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

/* Icon-only social buttons */
.social-btn {
  transition: transform 0.3s ease-in-out, background-color 0.3s;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.social-btn:hover {
  transform: scale(1.2);
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
