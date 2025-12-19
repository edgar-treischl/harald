<template>
  <v-container class="py-12" max-width="lg">
    <!-- Header -->
    <div class="header mb-8">
      <h2 class="text-h4 font-weight-medium">Slides, Talks, and Workshops</h2>

      <v-chip-group
        v-model="activeTopic"
        mandatory
        selected-class="chip-active"
        row
      >
        <v-chip
          v-for="topic in topics"
          :key="topic"
          :value="topic"
          label
          class="topic-chip"
        >
          {{ topic }}
        </v-chip>
      </v-chip-group>
    </div>

    <!-- Carousel with Integrated Text -->
    <v-carousel
      v-model="currentIndex"
      hide-delimiters
      show-arrows-on-hover
      height="450"
    >
      <v-carousel-item
        v-for="(project, index) in filteredProjects"
        :key="project.id"
      >
        <a
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="carousel-link"
        >
          <v-img
            :src="project.image"
            :alt="project.title"
            height="150"
            contain
            class="carousel-image"
          />
          <v-card-text class="carousel-caption">
            <h3 class="text-subtitle-1 font-weight-medium mb-1">
              {{ project.title }}
            </h3>
            <p class="text-body-2 text-medium-emphasis">
              {{ project.description }}
            </p>
          </v-card-text>
        </a>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
const Icon1 = import.meta.env.BASE_URL + 'images/slides_code.png'
const Icon2 = import.meta.env.BASE_URL + 'images/slides_git.png'
const Icon3 = import.meta.env.BASE_URL + 'images/rinp.png'
const Icon4 = import.meta.env.BASE_URL + 'images/ebf_website.png'




export default {
  name: 'Slides',
  data() {
    return {
      activeTopic: 'All',
      currentIndex: 0,
      topics: ['All', 'Data Science', 'R'],
      projects: [
        {
          id: '1',
          title: 'Code Quality and Style',
          description: 'Write clear code, write modular code, and develop with style ...',
          image: Icon1,
          url: 'https://edgar-treischl.github.io/slidesCode/',
          topics: ['Data Science'],
        },
        {
          id: '2',
          title: 'Git(Hub)',
          description: 'Whether you’re a beginner looking for guidance or simply in need of teaching material, my slides provide a step-by-step guide to working with Git, GitHub, and version control basics ...',
          image: Icon2,
          url: 'https://edgar-treischl.github.io/slidesGit/',
          topics: ['Data Science'],
        },
        {
          id: '3',
          title: 'R Package Development 2',
          description: 'Turn your R scripts into reliable, maintainable, shareable tools. In this hands-on workshop, you’ll learn: R packages with usethis & devtools; Testing with testthat ;Docs with pkgdown ...',
          image: Icon3,
          url: 'https://edgar-treischl.github.io/slidesRPackages/',
          topics: ['Data Science', 'R'],
        },
        {
          id: '4',
          title: 'EBF Slides',
          description: 'I held my lecture “educational empirical research” several times online, inspect all materials on the corresponding website.',
          image: Icon4,
          url: 'https://edgar-treischl.github.io/EBF/',
          topics: [],
        },
      ],
    }
  },
  computed: {
    filteredProjects() {
      if (this.activeTopic === 'All') return this.projects
      return this.projects.filter(project =>
        project.topics.includes(this.activeTopic)
      )
    },
  },
}
</script>

<style scoped>
/* Header */
.header {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Topic chips */
.topic-chip {
  background-color: #f1f3f5;
  color: #333;
  font-weight: 500;
}
.chip-active {
  background-color: #111 !important;
  color: #fff !important;
}

/* Carousel */
.carousel-link {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
  align-items: center;
}

.carousel-image {
  width: 100%;
  object-fit: contain;
  border-radius: 12px;
}

.carousel-caption {
  background-color: #ffffff;
  padding: 12px;
  text-align: center;
  border-radius: 8px;
  margin-top: 8px;
}
</style>
