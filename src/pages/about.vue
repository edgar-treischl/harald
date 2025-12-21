<!-- src/pages/about.vue -->
<template>
  <v-main>
    <v-container class="py-16">

      <!-- ===================== -->
      <!-- Intro Statement -->
      <!-- ===================== -->
      <v-row class="intro-section mb-16">
        <v-col cols="12" md="10">
          <h1 class="intro-heading mb-6">
            Nice to meet you,<br />
            I’m Edgar.
          </h1>
        </v-col>
      </v-row>

      <!-- ===================== -->
      <!-- About Me + Avatar -->
      <!-- ===================== -->
      <v-row
        justify="center"
        align="center"
        class="mt-24"
        v-fade
      >
        <v-col cols="12" md="3" class="text-center mb-6 mb-md-0">
          <v-img
            :src="avatarImage"
            alt="Portrait"
            max-width="180"
            aspect-ratio="1"
            class="avatar"
          />
        </v-col>

        <v-col cols="12" md="7">
          <h2 class="text-h3 font-weight-bold mb-6">
            About Me
          </h2>

          <p class="text-body-1 mb-6">
            I’m a data scientist turning data into practical solutions. 
            Lately, I’ve focused on building automation, deploying apps, 
            and creating efficient data workflows, including automated 
            reporting systems and technical infrastructure improvements 
            for our team.
            <br>
            <br>
            Before moving fully into applied data science, I spent years 
            in social science research, earning a PhD and working 
            on evaluation, causal analysis, and survey research. There, i’ve also 
            explored a wide range of data science topics, from 
            data visualization to machine learning and NLP.
          </p>
        </v-col>
      </v-row>

      <!-- ===================== -->
      <!-- Experience -->
      <!-- ===================== -->
      <v-row class="mt-16" v-fade>
        <v-col cols="12">
          <h2 class="text-h5 font-weight-bold mb-8">
            Professional Experience
          </h2>

          <v-timeline align="start" density="comfortable">
            <v-timeline-item dot-color="grey-darken-2">
              <strong>Data Scientist</strong><br />
              <span class="text-caption">
                Institution / Organization · Year–Present
              </span>
              <p class="mt-2">
                Designing and analyzing evaluation studies, developing survey
                instruments, and applying causal inference techniques to
                observational data.
              </p>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>

      <!-- Publications -->
      <v-row class="mt-16" v-fade>
        <v-col cols="12">
          <h2 class="text-h5 font-weight-bold mb-6">
            Selected Publications & Projects
          </h2>

          <v-card variant="outlined" class="mb-4">
            <v-card-text>
              <strong>Treischl, E. J.</strong> (Year).
              <em>Title of publication</em>.
              Journal Name.
              <v-btn
                variant="text"
                size="small"
                href="https://scholar.google.com"
                target="_blank"
                class="ml-2"
              >
                Google Scholar
              </v-btn>
            </v-card-text>
          </v-card>

          <v-card variant="outlined">
            <v-card-text>
              <strong>Applied Data Science Project</strong><br />
              Survey-based evaluation and reproducible reporting workflow using R.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Skills -->
      <v-row class="mt-16" v-fade>
        <v-col cols="12">
          <h2 class="text-h5 font-weight-bold mb-6">
            Skills & Tools
          </h2>

          <v-chip-group column>
            <v-chip variant="outlined" :ripple="false" class="static-chip">
              R
            </v-chip>
          </v-chip-group>
        </v-col>
      </v-row>

      <!-- Personal Note -->
      <v-row class="mt-16" v-fade>
        <v-col cols="12" md="8">
          <h2 class="text-h5 font-weight-bold mb-4">
            Beyond Research
          </h2>
          <p class="text-body-1">
            Outside of research, I enjoy jogging, swimming, and biking.
            These activities help me maintain balance and often provide
            space for new ideas to emerge.
          </p>
        </v-col>
      </v-row>

      <!-- Call to Action -->
      <v-row class="mt-16 justify-center text-center" v-fade>
        <v-col cols="12">
          <v-btn
            :href="cvUrl"
            variant="outlined"
            color="grey-darken-2"
            size="large"
            class="mr-4"
          >
            Download CV (PDF)
          </v-btn>

        </v-col>
      </v-row>

    </v-container>
  </v-main>
</template>


<script setup>
const avatarImage = import.meta.env.BASE_URL + 'images/avatar.png'

const cvUrl = `${import.meta.env.BASE_URL}CV_Treischl.pdf`

/* local scroll-fade directive (About page only) */
const vFade = {
  mounted(el) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = 1
      el.style.transform = 'none'
      return
    }

    el.style.opacity = 0
    el.style.transform = 'translateY(16px)'
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = 1
          el.style.transform = 'translateY(0)'
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
  }
}
</script>

<style scoped>
/* Intro section */

.intro-heading {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(3rem, 6vw, 4.5rem);
  line-height: 1.1;
  letter-spacing: -0.5px;
}

/* Avatar */
.avatar {
  border-radius: 50%;
  filter: grayscale(10%);
}

/* Chips */
.static-chip {
  cursor: default;
}

/* Body text rhythm */
p {
  line-height: 1.7;
}

</style>
