<template>
  <v-container class="py-12" max-width="lg">
      <h2 class="header text-h4 font-weight-medium">
        Slides, Talks, and Workshops
      </h2>
    <v-row>
      <!-- Sidebar -->
      <v-col cols="12" sm="4" class="pr-sm-4">
        <v-list two-line>
          <v-list-item
            v-for="project in projects"
            :key="project.id"
            :class="{ 'active-slide': project.id === currentSlide.id }"
            @click="selectSlide(project)"
          >
            <v-list-item-content>
              <v-list-item-title>{{ project.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ project.topics.join(', ') }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>

      <!-- Preview -->
      <v-col cols="12" sm="8">
        <v-card class="preview-card">
          <v-img
            :src="currentSlide.image"
            :alt="currentSlide.title"
            height="350"
            class="preview-image"
          />
          <v-card-text class="preview-caption">
            <h3 class="text-subtitle-1 font-weight-medium mb-2">
              {{ currentSlide.title }}
            </h3>
            <p class="text-body-2 text-medium-emphasis">
              {{ currentSlide.description }}
            </p>

            <v-btn
              v-if="currentSlide.url"
              :href="currentSlide.url"
              target="_blank"
              color="primary"
              class="mt-4 preview-button"
            >
              Open Slide
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { projects as rawProjects } from '@/data/slidesData'

// TypeScript type
interface Slide {
  id: string
  title: string
  description: string
  image: string
  url?: string
  topics: string[]
}

// Projects data
const projects: Slide[] = rawProjects

// Currently selected slide (always initialized to first)
const currentSlide = ref<Slide>(projects[0]!)


// Select slide from sidebar
function selectSlide(project: Slide) {
  currentSlide.value = project
}
</script>

<style scoped>
/* ---------------- Sidebar ---------------- */
.v-list {
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 8px 0;
  height: 100%;
  overflow-y: auto;
}

.v-list-item {
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  border-radius: 12px;
  margin: 4px 8px;
  position: relative;
  padding-left: 16px;
}

.v-list-item:hover {
  background-color: #f5f5f5;
  transform: translateX(2px);
}

.active-slide {
  background-color: #e0e0e0;
  font-weight: 500;
}

.active-slide::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 8px;
  width: 4px;
  background-color: #1976d2;
  border-radius: 2px;
}

.v-list::-webkit-scrollbar {
  width: 6px;
}

.v-list::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

/* ---------------- Preview Card ---------------- */
.preview-card {
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.preview-image {
  width: 100%;
  height: 350px;
  object-fit: contain;
  background-color: #fafafa;
}

.preview-caption {
  padding: 16px;
  text-align: center;
}

/* ---------------- Button ---------------- */
.preview-button {
  width: 100%;
  max-width: 250px;
  border-radius: 12px;
  font-weight: 500;
  text-transform: none;
  margin: 16px auto 0 auto;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.preview-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

/* ---------------- Header spacing ---------------- */
.header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: 'DM Serif Display', serif;
}

/* ---------------- Responsive ---------------- */
@media (max-width: 600px) {
  .v-list {
    margin-bottom: 16px;
    height: auto;
  }
}
</style>
