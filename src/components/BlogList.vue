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
        <v-card class="h-100 transition-elevation hover-elevation-5" outlined shaped>
          <!-- Optional image -->
          <v-img
            v-if="article.image"
            :src="article.image"
            height="180"
            class="rounded-top"
          ></v-img>

          <v-card-text>
            <h3 class="text-h6 font-weight-bold mb-1">{{ article.title }}</h3>
            <div class="text-caption text--secondary mb-2">{{ article.date }}</div>

            <div>
              <v-chip
                v-for="tag in article.tags"
                :key="tag"
                size="small"
                class="ma-1"
                color="primary"
                variant="outlined"
              >
                {{ tag }}
              </v-chip>
            </div>

            <p class="mt-2 excerpt text-body-2">{{ article.excerpt }}</p>
          </v-card-text>

          <v-card-actions>
            <v-btn
              :href="article.link"
              variant="text"
              color="primary"
              end-icon="mdi-arrow-right"
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

interface BlogArticle {
  id: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  image?: string
}

interface BlogArticleWithLink extends BlogArticle {
  link: string
}

export default {
  name: 'BlogList',
  setup() {
    const articles = articlesJson as BlogArticle[]

    // Precompute full paths in script
    const articlesWithLinks: BlogArticleWithLink[] = articles.map((article) => ({
      ...article,
      link: `${import.meta.env.BASE_URL}blog/${article.id}`,
      image: article.image
        ? `${import.meta.env.BASE_URL}${article.image}`
        : undefined,
    }))

    return {
      articlesWithLinks,
    }
  },
}
</script>

<style scoped>
.excerpt {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
