<template>
  <v-container class="py-12" max-width="lg">
    <!-- Header -->
    <div class="header mb-10">
      <h2 class="text-h4 font-weight-medium">My Projects</h2>

      <!-- Topic Filter -->
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

    <!-- Projects Grid -->
    <v-row>
      <v-col
        v-for="project in filteredProjects"
        :key="project.id"
        cols="12"
        sm="6"
      >
        <v-card class="project-card" flat>
          <a
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="card-link"
          >
            <!-- Image -->
            <v-img
              :src="project.image"
              :alt="project.title"
              class="project-image"
              height="200"
              cover
            />

            <!-- Text Content -->
            <v-card-text class="card-content">
              <h3 class="text-subtitle-1 font-weight-medium mb-1">
                {{ project.title }}
              </h3>
              <p class="text-body-2 text-medium-emphasis">
                {{ project.description }}
              </p>
            </v-card-text>
          </a>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Icon1 from '@/assets/images/slides_git.png'
import Icon2 from '@/assets/images/rinp.png'

export default {
  name: 'Slides',
  data() {
    return {
      activeTopic: 'All',
      topics: ['All', 'R'],
      projects: [
        {
          id: '1',
          title: 'Practice R Package',
          description:
            'The Practice R book is accompanied by an R package with interactive tutorials and learning materials.',
          image: Icon1,
          url: 'https://example.com/practice-r',
          topics: ['R'],
        },
        {
          id: '2',
          title: 'Project 2',
          description: 'This is a brief description of Project 2.',
          image: Icon2,
          url: 'https://example.com/project-2',
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
  gap: 20px;
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

/* Grid Cards */
.project-card {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background-color: #fff;
  height: 100%; /* ensure full height in column */
}

.card-link {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

/* Image */
.project-image {
  width: 100%;
  object-fit: cover;
}

/* Text content with white background */
.card-content {
  background-color: #ffffff; /* white background */
  flex-grow: 1;              /* ensures all cards same height */
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
