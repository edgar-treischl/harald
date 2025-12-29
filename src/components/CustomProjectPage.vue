<template>
  <v-container class="custom-project py-16" max-width="xl">
    <h1 class="text-h3 font-weight-bold text-center mb-8">
      {{ project.title }}
    </h1>

    <p class="text-body-1 text-center mb-8" v-html="project.description.replace(/\n/g, '<br/>')"></p>

    <div class="images d-flex justify-center mb-8">
      <v-img
        :src="projectFullImage"
        :alt="project.title"
        max-width="520"
        class="elevation-3 rounded-lg"
        contain
      />
    </div>

    <div class="text-center">
      <v-btn
        v-if="project.link"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        color="tertiary"
        rounded="xl"
        size="large"
      >
        Read the Book →
      </v-btn>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Capture project from props correctly
const { project } = defineProps<{ project: any }>()

// Public images → use absolute paths directly
const projectFullImage = computed(() => project?.image || '')
</script>


<style scoped>
.custom-project {
  background-color: #f9f9f9;
  text-align: center;
}

.custom-project p {
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}


.images {
  margin: 2rem 0;
}

.text-center {
  text-align: center;
}
</style>
