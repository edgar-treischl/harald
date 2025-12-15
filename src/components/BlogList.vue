<template>
  <v-container class="py-8" max-width="lg">
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="article in articlesWithLinks"
        :key="article.id"
      >
        <v-card class="h-100" outlined>
          <v-card-text>
            <h3 class="text-subtitle-1 font-weight-medium mb-2">
              {{ article.title }}
            </h3>
            <div class="text-caption text--secondary mb-2">
              {{ article.date }}
            </div>

            <v-chip
              v-for="tag in article.tags"
              :key="tag"
              small
              class="ma-1"
              color="primary"
              text-color="white"
            >
              {{ tag }}
            </v-chip>

            <p class="mt-2">{{ article.excerpt }}</p>
          </v-card-text>

          <v-card-actions>
            <!-- Use precomputed link -->
            <v-btn :href="article.link" text color="primary">
              Read more
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import articles from '@/data/articles.json'

export default {
  name: 'BlogList',
  setup() {
    // Precompute URLs with BASE_URL
    const articlesWithLinks = articles.map(a => ({
      ...a,
      link: import.meta.env.BASE_URL + 'blog/' + a.id,
    }))

    return { articlesWithLinks }
  },
}
</script>
