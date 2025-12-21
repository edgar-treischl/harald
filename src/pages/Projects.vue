<template>
  <v-container class="py-12" max-width="xl">
    <!-- Header -->
    <div class="header mb-10">
      <h2 class="text-h4 font-weight-medium">
        Project Portfolio
      </h2>

      <!-- Topic Filter -->
      <v-chip-group
        v-model="activeTopic"
        mandatory
        selected-class="chip-active"
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
        lg="4"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            class="project-card"
            :class="{ hovered: isHovering }"
            flat
          >
            <router-link :to="`/projects/${project.id}`" class="card-link">
              <!-- Image -->
              <div class="image-wrapper">
                <v-img
                  :src="project.fullImage"
                  :alt="project.title"
                  contain
                  class="project-image"
                />
              </div>

              <!-- Content -->
              <v-card-text class="card-content">
                <h3 class="text-subtitle-1 font-weight-medium mb-1">
                  {{ project.title }}
                </h3>

                <p class="text-body-2 text-medium-emphasis">
                  {{
                    project.description.length > 120
                      ? project.description.slice(0, 120) + '…'
                      : project.description
                  }}
                </p>

                <!-- Custom layout indicator -->
                <v-chip
                  v-if="project.layout === 'custom'"
                  size="x-small"
                  class="mt-2"
                >
                  Featured
                </v-chip>
              </v-card-text>
            </router-link>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects as rawProjects } from '@/data/projects'

// Define Project type including optional layout
interface Project {
  id: string | number
  title: string
  description: string
  image: string
  topics: string[]
  layout: 'standard' | 'custom'
  fullImage: string
}

// Map projects and make sure layout exists
const projectList: Project[] = rawProjects.map(p => ({
  ...p,
  layout: (p as any).layout || 'standard', // force default if missing
  fullImage: import.meta.env.BASE_URL + p.image,
}))

const topics = ref<string[]>(['All', 'R'])
const activeTopic = ref<string>('All')

// Filter by topic and sort custom projects first
const filteredProjects = computed(() => {
  const list =
    activeTopic.value === 'All'
      ? projectList
      : projectList.filter(project =>
          project.topics.includes(activeTopic.value)
        )

  return [...list].sort(
    (a, b) => Number(b.layout === 'custom') - Number(a.layout === 'custom')
  )
})
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.topic-chip {
  background-color: #f1f3f5;
  color: #333;
  font-weight: 500;
}

.chip-active {
  background-color: #111 !important;
  color: #fff !important;
}

.project-card {
  height: 100%;
  border-radius: 16px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}

.project-card.hovered {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.card-link {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

.image-wrapper {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.project-image {
  max-height: 120px;
  max-width: 80%;
}

.card-content {
  flex-grow: 1;
  padding: 20px;
}
</style>
