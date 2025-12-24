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
      height="550"
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
import { projects } from '@/data/slidesData' // adjust path if needed


export default {
  name: 'Slides',
  data() {
    return {
      activeTopic: 'All',
      currentIndex: 0,
      topics: ['All', 'Data Science', 'R'],
      projects, // now imported from slidesData.js
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

/* Carousel card */
.carousel-link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden; /* make sure corners clip image/text */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.carousel-link:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

/* Carousel image */
.carousel-image {
  width: 100%;
  height: 300px; /* adjust as needed */
  object-fit: contain;
  background-color: #fafafa; /* subtle background behind image */
}

/* Caption below the image */
.carousel-caption {
  padding: 16px;
  text-align: center;
  background-color: #ffffff; /* keep text area consistent */
}
</style>


