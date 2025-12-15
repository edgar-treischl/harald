<template>
  <v-container class="py-8" max-width="md">
    <v-row>
      <v-col>
        <h1 class="text-h3 font-weight-bold mb-1">{{ meta.title }}</h1>
        <div class="text-subtitle-2 text--secondary mb-3">
          {{ meta.date }}
        </div>

        <v-chip
          v-for="tag in meta.tags"
          :key="tag"
          class="ma-1"
          size="small"
          color="primary"
          text-color="white"
        >
          {{ tag }}
        </v-chip>

        <p class="mt-4 text-body-1">{{ meta.excerpt }}</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div v-html="htmlContent" class="blog-content"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import MarkdownIt from 'markdown-it'

interface BlogMeta {
  title: string
  date: string
  tags: string[]
  excerpt: string
}

interface FrontMatterResult {
  attributes: Record<string, string | string[]>
  body: string
}

export default {
  name: 'BlogPage',
  props: {
    file: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const meta = ref<BlogMeta>({
      title: '',
      date: '',
      tags: [],
      excerpt: '',
    })

    const htmlContent = ref<string>('')

    // Browser-safe, TS-safe front matter parser
    function parseFrontMatter(md: string): FrontMatterResult {
      const match = /^---\n([\s\S]+?)\n---/.exec(md)
      const attributes: Record<string, string | string[]> = {}
      let body = md

      if (match && match[1]) {
        const yaml: string = match[1]
        body = md.slice(match[0].length).trim()

        yaml.split('\n').forEach((line: string) => {
          const [key, ...rest] = line.split(':')
          if (!key) return

          let value: string | string[] = rest.join(':').trim()

          // Parse simple arrays: [a, b, c]
          if (/^\[.*\]$/.test(value)) {
            value = value
              .replace(/^\[|\]$/g, '')
              .split(',')
              .map((v: string) => v.trim())
          }

          attributes[key.trim()] = value
        })
      }

      return { attributes, body }
    }

    onMounted(async () => {
      try {
        const url = `${import.meta.env.BASE_URL}articles/${props.file}`
        const res = await fetch(url)

        if (!res.ok) {
          throw new Error(`Failed to fetch ${props.file} at ${url}`)
        }

        const raw = await res.text()
        const parsed = parseFrontMatter(raw)

        meta.value = {
          title: String(parsed.attributes.title ?? ''),
          date: String(parsed.attributes.date ?? ''),
          tags: Array.isArray(parsed.attributes.tags)
            ? parsed.attributes.tags
            : [],
          excerpt: String(parsed.attributes.excerpt ?? ''),
        }

        const md = new MarkdownIt({
          html: true,
          linkify: true,
        })

        htmlContent.value = md.render(parsed.body)
      } catch (err) {
        console.error('Error loading markdown:', err)
        htmlContent.value = '<p>Error loading article.</p>'
      }
    })

    return {
      meta,
      htmlContent,
    }
  },
}
</script>

<style scoped>
.blog-content {
  line-height: 1.7;
  font-size: 1rem;
}

.blog-content h1,
.blog-content h2,
.blog-content h3,
.blog-content h4 {
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  font-weight: 600;
}

.blog-content p {
  margin-bottom: 1em;
}

.blog-content ul {
  padding-left: 1.5em;
  margin-bottom: 1em;
}

.blog-content li {
  margin-bottom: 0.5em;
}

.blog-content img {
  max-width: 100%;
  margin: 1em 0;
  border-radius: 8px;
}
</style>
