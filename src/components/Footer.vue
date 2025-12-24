<template>
  <v-footer
    class="footer"
    color="grey-darken-3"
  >
    <v-container>
      <v-row
        align="center"
        justify="space-between"
        class="flex-wrap"
      >
        <!-- Left: Tech stack -->
        <v-col
          cols="12"
          md="4"
          class="d-flex justify-center justify-md-start align-center mb-2 mb-md-0"
        >
          <div class="tech">
            <p>Made with</p>
            <v-icon size="20" icon="mdi-vuejs" />
            <p>,</p>
            <v-icon size="20" icon="mdi-vuetify" />
            <p>, and </p>
            <span class="heart">❤️</span>
          </div>
        </v-col>

        <!-- Center: Social links -->
        <v-col
          cols="12"
          md="4"
          class="d-flex justify-center mb-2 mb-md-0"
        >
          <v-btn
            v-for="(link, index) in socialLinks"
            :key="index"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            icon
            density="compact"
            variant="text"
            class="social-btn"
            :aria-label="link.label"
          >
            <v-icon :icon="link.icon" size="22" />
          </v-btn>
        </v-col>

        <!-- Right: Licence -->
        <v-col
          cols="12"
          md="4"
          class="text-center text-md-right"
        >
          <v-btn
            to="/license"
            variant="text"
            density="compact"
            class="licence"
          >
            License
          </v-btn>
        </v-col>
      </v-row>

      <v-divider class="my-3" />

      <!-- Copyright -->
      <v-row justify="center">
        <span class="copyright">
          © {{ currentYear }} Edgar J. Treischl
        </span>
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
  { icon: 'mdi-github', url: 'https://github.com/edgar-treischl/harald', label: 'GitHub' },
  { icon: 'mdi-google', url: 'https://scholar.google.com/citations?user=hOhulnUAAAAJ&hl=en', label: 'Google Scholar' },
  { icon: 'mdi-linkedin', url: 'https://www.linkedin.com/in/dr-edgar-treischl-b681791b2/?originalSubdomain=de', label: 'LinkedIn' },
  { icon: 'mdi-file-pdf-box', url: `${import.meta.env.BASE_URL}CV_Treischl.pdf`, label: 'CV PDF' }
]

const currentYear = new Date().getFullYear()
</script>



<style scoped>
.footer {
  padding: 12px 0;
  opacity: 0.95;
}

.tech {
  display: flex;
  align-items: center;
  gap: 6px;
  opacity: 0.9;
}

.heart {
  font-size: 18px;
  line-height: 1;
}

.social-btn {
  transition: transform 0.2s ease, background-color 0.2s;
}

.social-btn:hover {
  transform: translateY(-2px);
  background-color: rgba(255, 255, 255, 0.12);
}

.licence {
  color: rgba(255, 255, 255, 0.7);
}

.copyright {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
}
</style>
