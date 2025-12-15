<template>
  <v-container
    class="project-detail py-16"
    max-width="xl"
  >
    <!-- Project Title -->
    <h1 class="text-h3 font-weight-bold text-center mb-8">
      {{ project.title }}
    </h1>

    <v-row class="project-content" align="center">
      <!-- Project Info -->
      <v-col
        cols="12"
        md="6"
        order="2"
        order-md="1"
      >
        <div class="d-flex flex-column justify-space-between h-100">
          <!-- Description -->
          <div class="mb-8">
            <h2 class="text-h5 font-weight-semibold mb-4">
              Project Description
            </h2>
            <p class="text-body-1 text-grey-darken-1">
              {{ project.description }}
            </p>
          </div>

          <!-- Technologies -->
          <div class="mb-8">
            <h3 class="text-h6 font-weight-semibold mb-3">
              Technologies Used
            </h3>
            <v-chip-group column>
              <v-chip
                v-for="tech in project.technologies"
                :key="tech"
                color="grey-lighten-3"
                class="mr-2 mb-2"
                label
              >
                {{ tech }}
              </v-chip>
            </v-chip-group>
          </div>

          <!-- Visit Project -->
          <div>
            <v-btn
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              size="large"
              rounded="xl"
              elevation="4"
            >
              Visit Project →
            </v-btn>
          </div>
        </div>
      </v-col>

      <!-- Project Image -->
      <v-col
        cols="12"
        md="6"
        order="1"
        order-md="2"
        class="d-flex justify-center"
      >
        <v-img
          :src="project.image"
          :alt="project.title"
          max-width="320"
          height="192"
          contain
          class="rounded-lg elevation-2"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Icon1 from '@/assets/images/practicer.png'
import Icon2 from '@/assets/images/icon.png'

export default {
  name: 'ProjectDetail',
  props: {
    projectId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      projects: [
        {
          id: '1',
          title: 'Practice R Package',
          description:
            'The Practice R Package helps you improve your R skills through various exercises and challenges.',
          image: Icon1,
          link: 'https://edgar-treischl.github.io/PracticeR/',
          technologies: ['Vue.js', 'Node.js', 'MongoDB'],
        },
        {
          id: '2',
          title: 'Project 2',
          description: 'Detailed description of Project 2.',
          image: Icon2,
          link: '/projects/project2',
          technologies: ['React', 'Firebase', 'CSS'],
        },
      ],
    }
  },
  computed: {
    project() {
      return (
        this.projects.find(p => p.id === this.projectId) || {}
      )
    },
  },
}
</script>

<style scoped>
.project-detail {
  background-color: #f4f7fc;
}

.project-content {
  gap: 48px;
}
</style>
