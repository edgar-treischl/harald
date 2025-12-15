<template>
  <v-container
    class="project-detail py-16"
    max-width="xl"
  >
    <!-- Title -->
    <h1 class="text-h4 font-weight-medium text-center mb-12">
      {{ project.title }}
    </h1>

    <v-row
      class="project-content"
      align="center"
    >
      <!-- Text / Info -->
      <v-col
        cols="12"
        md="6"
        order="2"
        order-md="1"
      >
        <div class="content-wrapper">
          <!-- Description -->
          <section class="mb-10">
            <h2 class="text-subtitle-1 font-weight-medium mb-3">
              Description
            </h2>
            <p class="text-body-2 text-medium-emphasis">
              {{ project.description }}
            </p>
          </section>

          <!-- Technologies -->
          <section class="mb-10">
            <h3 class="text-subtitle-1 font-weight-medium mb-3">
              Technologies
            </h3>
            <v-chip-group column>
              <v-chip
                v-for="tech in project.technologies"
                :key="tech"
                class="tech-chip"
                label
              >
                {{ tech }}
              </v-chip>
            </v-chip-group>
          </section>

          <!-- CTA -->
          <v-btn
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="project-btn"
            rounded="xl"
            size="large"
          >
            Visit Project →
          </v-btn>
        </div>
      </v-col>

      <!-- Image -->
      <v-col
        cols="12"
        md="6"
        order="1"
        order-md="2"
        class="d-flex justify-center"
      >
        <div class="image-wrapper">
          <v-img
            :src="project.image"
            :alt="project.title"
            contain
            class="project-image"
          />
        </div>
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
            'The Practice R Package helps you improve your R skills through structured exercises and interactive challenges.',
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
      return this.projects.find(p => p.id === this.projectId) || {}
    },
  },
}
</script>

<style scoped>
.project-detail {
  background-color: #fafafa;
}

/* Layout */
.project-content {
  max-width: 1100px;
  margin: 0 auto;
  gap: 64px;
}

/* Text content */
.content-wrapper {
  max-width: 480px;
}

.text-medium-emphasis {
  color: rgba(0, 0, 0, 0.6);
}

/* Chips */
.tech-chip {
  margin-bottom: 8px;
  margin-right: 8px;
  background-color: #f1f3f5;
  color: #333;
  font-weight: 500;
}

/* Button */
.project-btn {
  background-color: #111;
  color: #fff;
  text-transform: none;
  font-weight: 500;
  padding: 12px 28px;
}

/* Image */
.image-wrapper {
  width: 100%;
  max-width: 360px;
  padding: 32px;
  background-color: #ffffff;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.project-image {
  height: 220px;
}
</style>
