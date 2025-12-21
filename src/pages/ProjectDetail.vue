<template>
  <component
    v-if="project"
    :is="layoutComponent"
    :project="project"
  />

  <v-container v-else class="py-16 text-center">
    <h1 class="text-h5 font-weight-medium mb-4">
      Project not found
    </h1>
    <p class="text-body-2 text-medium-emphasis">
      The project you are looking for does not exist.
    </p>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects as rawProjects } from '@/data/projects'

// Import layouts
import StandardProjectPage from '@/components/StandardProjectPage.vue'
import CustomProjectPage from '@/components/CustomProjectPage.vue'

// Define Project type
interface Project {
  id: string | number
  title: string
  description: string
  image: string
  topics: string[]
  layout?: 'standard' | 'custom'
}

// Map projects and ensure layout exists
const projectList: Project[] = rawProjects.map(p => ({
  ...p,
  layout: (p as Project).layout || 'standard',
}))

const route = useRoute()

// Make sure to compare IDs as strings
const project = computed(() => {
  const id = String(route.params.projectId)
  return projectList.find(p => String(p.id) === id)
})

const layoutComponent = computed(() => {
  if (!project.value) return null
  return project.value.layout === 'custom'
    ? CustomProjectPage
    : StandardProjectPage
})
</script>
