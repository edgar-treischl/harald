<template>
  <v-container class="custom-project py-16" max-width="xl">
    <h1 class="text-h3 font-weight-bold text-center mb-8">
      {{ project.title }} (Custom)
    </h1>

    <p class="text-body-1 text-center mb-8" v-html="project.description.replace(/\n/g, '<br/>')"></p>

    <div class="images d-flex justify-center mb-8">
      <v-img
        :src="projectFullImage"
        :alt="project.title"
        max-width="600"
        contain
      />
    </div>

    <div class="text-center">
      <v-btn
        v-if="project.link"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
        rounded="xl"
        size="large"
      >
        Visit Project →
      </v-btn>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Capture project from props correctly
const { project } = defineProps<{ project: any }>()

// Compute full image URL
const projectFullImage = computed(() => {
  return project?.image ? import.meta.env.BASE_URL + project.image : ''
})
</script>

<style scoped>
.custom-project {
  background-color: #f9f9f9;
  text-align: center;
}

.images {
  margin: 2rem 0;
}

.text-center {
  text-align: center;
}
</style>
