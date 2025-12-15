<template>
  <v-footer
    color="grey darken-4"
    class="white--text pa-12"
    padless
  >
    <v-container>
      <v-row
        align="center"
        justify="space-between"
        class="flex-wrap"
      >
        <!-- Left: Brand / Name -->
        <v-col cols="12" md="4" class="text-center text-md-left mb-6 mb-md-0">
          <h2 class="font-weight-bold mb-2">Edgar J. Treischl</h2>
          <p class="subtitle-2 mb-0">Data Scientist</p>
        </v-col>

        <!-- Center: Social Links -->
        <v-col cols="12" md="4" class="d-flex justify-center mb-6 mb-md-0">
          <v-btn
            v-for="(link, index) in socialLinks"
            :key="index"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            icon
            class="social-btn white--text mx-2"
            :aria-label="link.label"
          >
            <v-icon size="28">{{ link.icon }}</v-icon>
          </v-btn>
        </v-col>

        <!-- Right: Quick links (optional) -->
        <v-col cols="12" md="4" class="text-center text-md-right">
          <v-btn text class="white--text" to="/about">About</v-btn>
          <v-btn text class="white--text" to="/projects">Projects</v-btn>
          <v-btn text class="white--text" to="/contact">Contact</v-btn>
        </v-col>
      </v-row>

      <v-divider class="my-6" color="white"></v-divider>

      <!-- Copyright -->
      <v-row justify="center">
        <p class="caption mb-0">
          &copy; {{ currentYear }} Edgar J. Treischl. All rights reserved.
        </p>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
interface SocialLink {
  icon: string
  url: string
  label: string
}

const socialLinks: SocialLink[] = [
  { icon: 'mdi-github', url: 'https://github.com/edgar-treischl', label: 'GitHub' },
  { icon: 'mdi-google', url: 'https://scholar.google.com/citations?user=hOhulnUAAAAJ&hl=en', label: 'Google Scholar' },
  { icon: 'mdi-linkedin', url: 'https://www.linkedin.com/in/dr-edgar-treischl-b681791b2/?originalSubdomain=de', label: 'LinkedIn' },
  { icon: 'mdi-file-pdf-box', url: `${import.meta.env.BASE_URL}CV_Treischl.pdf`, label: 'CV PDF' }
]

const currentYear = new Date().getFullYear()
</script>

<style scoped>
.social-btn {
  transition: transform 0.3s ease-in-out, background-color 0.3s;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.social-btn:hover {
  transform: scale(1.2);
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
