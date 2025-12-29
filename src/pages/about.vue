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
            I’m a data scientist transforming complex data into practical, 
            actionable solutions. I currently lead a small cross-functional 
            team in building dashboards, deploying apps, automating workflows, 
            and improving technical infrastructure—helping teams access the 
            right insights at the right time.
            <br><br>
            Before moving fully into applied data science, I earned a PhD in 
            social science and spent several years conducting research in evaluation, 
            causal analysis, and survey methods. During this time, I explored a broad 
            range of data science topics—from visualization and machine learning 
            to NLP—laying the foundation for my current work bridging research, 
            engineering, and product.
            <br><br>
            I’m passionate about designing systems that turn data into impact, 
            combining technical expertise, product strategy, and leadership to 
            deliver real-world solutions.
            
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
              <strong>Technical Product Lead - Data & Web Platforms</strong><br />
              <span class="text-caption">
                ISB Munich · 2025 - Present
              </span>
              <v-list density="compact" class="mt-2">
                <v-list-item
                  v-for="(item, i) in itemsPL"
                  :key="i"
                  prepend-icon="mdi-chevron-right"
                  lines="multiple"
                  >
                <v-list-item-title class="text-wrap">{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-timeline-item>

            <v-timeline-item dot-color="grey-darken-2">
              <strong>Data Scientist</strong><br />
              <span class="text-caption">
                ISB Munich · 2024 - 2025
              </span>
              <v-list density="compact" class="mt-2">
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  prepend-icon="mdi-chevron-right"
                  lines="multiple"
                  >
                <v-list-item-title class="text-wrap">{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-timeline-item>

            <v-timeline-item dot-color="grey-darken-2">
              <strong>Post Doctoral Researcher</strong><br />
              <span class="text-caption">
                FAU Nuremberg · 2020 - 2023
              </span>
              <v-list density="compact" class="mt-2">
                <v-list-item
                  v-for="(item, i) in itemsPD"
                  :key="i"
                  prepend-icon="mdi-chevron-right"
                  lines="multiple"
                  >
                <v-list-item-title class="text-wrap">{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-timeline-item>

          </v-timeline>
          
        </v-col>
      </v-row>

      <!-- ===================== -->
      <!-- Publications -->
      <!-- ===================== -->
      <v-row class="mt-16" v-fade>
        <v-col cols="12">
          <h2 class="text-h5 font-weight-bold mb-6">
            Selected Publications & Projects
          </h2>

          <v-card variant="outlined" class="mb-4">
            <v-card-text>
              <strong>Treischl, E. J.</strong> (2023).
              <em>Practice R: An interactive textbook</em>.
              Walter de Gruyter GmbH.
              <v-btn
                variant="text"
                size="small"
                href="https://books.google.de/books?hl=en&lr=&id=Oc25EAAAQBAJ&oi=fnd&pg=PP7&ots=SDUnUwtBRe&sig=6bxV5LQxkWvBy_v5DTdzM83xYgA&redir_esc=y#v=onepage&q&f=false"
                target="_blank"
                class="ml-2"
              >
                Google Books
              </v-btn>
            </v-card-text>
          </v-card>

          <v-card variant="outlined">
            <v-card-text>
              <strong>Treischl, E. / Wolbring, T.</strong> (2020).
              <em>Wirkungsevaluation</em>.
              Grundlagen, Standards, Beispiele. Beltz Juventa.
            <v-btn
                variant="text"
                size="small"
                href="https://www.bic-media.com/widget/?isbn=9783779939245"
                target="_blank"
                class="ml-2"
              >
                Preview
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- ===================== -->
      <!-- Skills & Tools -->
      <!-- ===================== -->
      <v-row class="mt-16" v-fade>
        <v-col cols="12">
          <h2 class="text-h5 font-weight-bold mb-6">
            Skills & Tools
          </h2>

          <!-- Intro text -->
          <p class="text-body-1 mb-8">
            To give a transparent overview of my work, I analyzed my repositories 
            using the GitHub/GitLab API. The data reflects my development activity 
            in 2025 and is derived from the repos I actually maintain.
          </p>
          <!-- LanguageBar -->
          <p class="text-body-1 mb-4">
            The next bar chart shows the distribution of programming languages by 
            percentage. It illustrates which languages I primarily work with 
            and how my development time is spread across different technologies.
          </p>
          <LanguageBar />

          <!-- TopicTree -->
          <p class="text-body-1 mb-4">
            The following treemap groups repositories by topic and visualizes their relative 
            size and focus areas. This makes it easy to see how my projects are 
            structured across themes such as web development, DevOps, and other topics.
          </p>
          <TopicTree class="mb-10" />
        </v-col>
      </v-row>

      <!-- ===================== -->
      <!-- Personal Note -->
      <!-- ===================== -->
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

      <!-- ===================== -->
      <!-- Call to Action -->
      <!-- ===================== -->
      <v-row class="mt-16 justify-center text-center" v-fade>
        <v-col cols="12">
          <v-btn
            :href="cvUrl"
            variant="outlined"
            color="grey-darken-2"
            size="large"
          >
            Download CV (PDF)
          </v-btn>
        </v-col>
      </v-row>

    </v-container>
  </v-main>
</template>

<script setup>
const items = [
  'Development of a dynamic, automated reporting system for evaluations in Bavaria',
  'Established a fully automated development, testing, and deployment infrastructure',
  'Designed and implemented a validation strategy to ensure long-term data quality and reproducibility'
]



const itemsPD = [
  'Developing survey experiments to study the acceptance of AI-based applications',
  'Webmaster and IT coordinator for the chair, responsible for website maintenance and technical infrastructure'
]

const itemsPL = [
  'Defined the architecture and strategic direction for a modular, scalable ecosystem to deploy interactive data applications, ensuring a clear separation between application development and platform operations',
  'Oversaw the technical concept and implementation strategy for secure, enterprise-ready deployment using Docker, Kubernetes, and micro-frontend integration, in close collaboration with internal and external stakeholders',
  'Built and led a cross-functional dashboarding team across Data Science, Web Development, IT/DevOps, and Organizational Development to deliver high-impact data applications'
]




/* const avatarImage = import.meta.env.BASE_URL + '/images/avatar.webp'*/

const avatarImage = '/images/avatar.webp'

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

/* Body text rhythm */
p {
  line-height: 1.7;
}
</style>
