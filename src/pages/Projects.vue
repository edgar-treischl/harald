<template>
  <v-container class="py-12" max-width="xl">
    <!-- Title -->
    <h2 class="text-h3 font-weight-bold text-center mb-8">
      My Projects
    </h2>

    <!-- Projects Grid -->
    <v-row dense>
      <v-col
        v-for="project in projects"
        :key="project.id"
        cols="12"
        sm="6"
        lg="4"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            rounded="lg"
            elevation="4"
            class="project-card"
            :class="{ hovered: isHovering }"
          >
            <router-link
              :to="`/projects/${project.id}`"
              class="text-decoration-none text-inherit"
            >
              <!-- Project Image -->
              <v-img
                :src="project.image"
                :alt="project.title"
                height="192"
                contain
                class="bg-white"
              />

              <!-- Project Info -->
              <v-card-text>
                <h3 class="text-h6 font-weight-semibold mb-2">
                  {{ project.title }}
                </h3>
                <p class="text-body-2 text-grey-darken-1">
                  {{ project.description }}
                </p>
              </v-card-text>
            </router-link>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Icon1 from '@/assets/images/practicer.png'
import Icon2 from '@/assets/images/icon.png'

export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: '1',
          title: 'Practice R Package',
          description:
            'The Practice R book is accompanied by an R package. This provides further learning materials that include interactive tutorials ...',
          image: Icon1,
        },
        {
          id: '2',
          title: 'Project 2',
          description: 'This is a brief description of Project 2.',
          image: Icon2,
        },
      ],
    }
  },
}
</script>

<style scoped>
.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card.hovered {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
