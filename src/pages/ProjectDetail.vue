<template>
  <v-container class="project-detail py-16" max-width="xl">
    <h1 class="text-h4 font-weight-medium text-center mb-12">
      {{ project.title }}
    </h1>

    <div class="project-content">
      <!-- ROW 1 -->
      <v-row align="center">
        <!-- Image -->
        <v-col cols="12" md="6" class="d-flex justify-center">
          <div class="image-frame">
            <v-img
              :src="projectFullImage"
              :alt="project.title"
              class="project-image"
              contain
            />
          </div>
        </v-col>

        <!-- Text -->
        <v-col cols="12" md="6">
          <div class="content-wrapper">
            <section class="mb-10">
              <h2 class="text-subtitle-1 font-weight-medium mb-3">
                Description
              </h2>
              <p class="text-body-2 text-medium-emphasis" v-html="project.description.replace(/\n/g, '<br/>')"></p>
            </section>

            <section>
              <h3 class="text-subtitle-1 font-weight-medium mb-3">
                Keywords
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
          </div>
        </v-col>
      </v-row>

      <!-- ROW 2 -->
      <v-row align="center">
        <!-- Empty cell for balance -->
        <v-col cols="12" md="6" />

        <!-- Action -->
        <v-col
          cols="12"
          md="6"
          class="d-flex justify-center justify-md-start"
        >
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
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { projects } from '@/data/projects'

export default {
  name: 'ProjectDetail',

  props: {
    projectId: {
      type: String,
      required: true,
    },
  },

  computed: {
    project() {
      return projects.find(p => p.id === this.projectId)
    },
    projectFullImage() {
      return this.project
        ? import.meta.env.BASE_URL + this.project.image
        : ''
    },
  },
}
</script>

<style scoped>
.project-detail {
  background-color: #fafafa;
}

/* Main layout */
.project-content {
  max-width: 1100px;
  margin: 0 auto;
  gap: 64px;
  align-items: stretch;
}

/* Text column */
.content-wrapper {
  max-width: 480px;
}

.text-medium-emphasis {
  color: rgba(0, 0, 0, 0.6);
}

/* Technologies */
.tech-chip {
  margin-bottom: 8px;
  margin-right: 8px;
  background-color: #f1f3f5;
  color: #333;
  font-weight: 500;
}

/* Action button */
.project-btn {
  background-color: #111;
  color: #fff;
  text-transform: none;
  font-weight: 500;
  padding: 12px 28px;
}

/* ===== Image handling (UPDATED) ===== */
.image-frame {
  width: 100%;
  max-width: 520px;
  min-height: 320px;
  padding: 24px;
  border-radius: 20px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);

  display: flex;
  align-items: center;
  justify-content: center;
}

.project-image {
  width: 100%;
  max-height: 280px;
  object-fit: contain;
}

/* Responsive */
@media (max-width: 960px) {
  .project-content {
    gap: 32px;
  }

  .image-frame {
    max-width: 100%;
    min-height: 260px;
    padding: 20px;
  }

  .project-image {
    max-height: 220px;
  }
}
</style>
