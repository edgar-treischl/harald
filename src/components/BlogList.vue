
<template>
  <v-container class="py-8" max-width="lg">
    <v-row>
      <v-col
        v-for="article in articlesWithLinks"
        :key="article.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card class="h-100" variant="outlined">
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
              size="small"
              class="ma-1"
              color="primary"
              text-color="white"
            >
              {{ tag }}
            </v-chip>

            <p class="mt-2">{{ article.excerpt }}</p>
          </v-card-text>

          <v-card-actions>
            <v-btn
              :href="article.link"
              variant="text"
              color="primary"
            >
              Read more
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import articlesJson from '@/data/articles.json'
import type { Ref } from 'vue'

interface BlogArticle {
  id: string
  title: string
  date: string
  excerpt: string
  tags: string[]
}

interface BlogArticleWithLink extends BlogArticle {
  link: string
}

export default {
  name: 'BlogList',
  setup() {
    const articles = articlesJson as BlogArticle[]

    const articlesWithLinks: BlogArticleWithLink[] = articles.map(
      (article: BlogArticle) => ({
        ...article,
        link: `${import.meta.env.BASE_URL}blog/${article.id}`,
      }),
    )

    return {
      articlesWithLinks,
    }
  },
}
</script>
