<template>
  <v-card class="blog-card" outlined>
    <router-link :to="`/blog/${article.id}`" class="card-link">
      <v-card-title>{{ article.title }}</v-card-title>
      <v-card-subtitle>{{ article.date }}</v-card-subtitle>
      <v-card-text>{{ article.excerpt }}</v-card-text>
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
    </router-link>
  </v-card>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    article: Object,
  },
};
</script>

<style scoped>
.card-link {
  text-decoration: none;
  color: inherit;
}
.blog-card {
  transition: transform 0.2s;
}
.blog-card:hover {
  transform: translateY(-4px);
}
</style>
