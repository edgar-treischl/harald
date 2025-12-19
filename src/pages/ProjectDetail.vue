<template>
  <v-container class="project-detail py-16" max-width="xl">
    <h1 class="text-h4 font-weight-medium text-center mb-12">
      {{ project.title }}
    </h1>

    <v-row
      class="project-content"
      align="center"
      justify="center"
    >
      <!-- Image Column -->
      <v-col
        cols="12"
        md="6"
        class="d-flex justify-center align-center"
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

      <!-- Text Column -->
      <v-col
        cols="12"
        md="6"
        class="d-flex flex-column justify-center"
      >
        <div class="content-wrapper">
          <section class="mb-10">
            <h2 class="text-subtitle-1 font-weight-medium mb-3">
              Description
            </h2>
            <p class="text-body-2 text-medium-emphasis">
              {{ project.description }}
            </p>
          </section>

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

          <v-btn
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="project-btn"
            rounded="xl"
            color="grey-darken-2"
            size="medium"
          >
            Visit Project →
          </v-btn>
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
          id: 'practicer',
          title: 'Practice R Package',
          description:
            'The Practice R package is the corresponding R package for the book. It contains tutorials, learning materials (e.g. RMarkdown templates) and helper functions to learn R.',
          image: Icon1,
          link: 'https://edgar-treischl.github.io/PracticeR/',
          technologies: ['R'],
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
      return this.projects.find(p => p.id === this.projectId)
    },
  },
}
</script>

<style scoped>
.project-detail {
  background-color: #fafafa;
}

.project-content {
  max-width: 1100px;
  margin: 0 auto;
  gap: 64px;
  align-items: center;
}

.content-wrapper {
  max-width: 480px;
}

.text-medium-emphasis {
  color: rgba(0, 0, 0, 0.6);
}

.tech-chip {
  margin-bottom: 8px;
  margin-right: 8px;
  background-color: #f1f3f5;
  color: #333;
  font-weight: 500;
}

.project-btn {
  background-color: #111;
  color: #fff;
  text-transform: none;
  font-weight: 500;
  padding: 12px 28px;
}

.image-wrapper {
  width: 100%;
  max-width: 360px;
  padding: 32px;
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-image {
  width: 100%;
  height: 220px;
  object-fit: contain;
}

@media (max-width: 960px) {
  .project-content {
    gap: 32px;
  }
  .image-wrapper {
    max-width: 280px;
    padding: 24px;
  }
  .project-image {
    height: 180px;
  }
}
</style>
