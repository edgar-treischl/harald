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
import { findProjectById } from '@/data/projectCatalog'

// Import layouts
import StandardProjectPage from '@/components/StandardProjectPage.vue'
import CustomProjectPage from '@/components/CustomProjectPage.vue'

const route = useRoute()

const project = computed(() => {
  return findProjectById(route.params.projectId)
})

const layoutComponent = computed(() => {
  if (!project.value) return null
  return project.value.layout === 'custom'
    ? CustomProjectPage
    : StandardProjectPage
})
</script>
