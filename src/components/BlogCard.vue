<template>
  <v-card class="blog-card" variant="outlined">
    <router-link :to="`/blog/${article.id}`" class="card-link">
      <v-card-title>{{ article.title }}</v-card-title>
      <v-card-subtitle>{{ article.date }}</v-card-subtitle>
      <v-card-text>{{ article.excerpt }}</v-card-text>

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
    </router-link>
  </v-card>
</template>

<script lang="ts">
import { PropType } from 'vue'

export interface BlogArticle {
  id: string
  title: string
  date: string
  excerpt: string
  tags: string[]
}

export default {
  name: 'BlogCard',
  props: {
    article: {
      type: Object as PropType<BlogArticle>,
      required: true,
    },
  },
}
</script>

<style scoped>
.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.blog-card {
  transition: transform 0.2s ease;
}

.blog-card:hover {
  transform: translateY(-4px);
}
</style>
