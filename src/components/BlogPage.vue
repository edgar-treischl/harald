<template>
  <v-container class="py-8" max-width="md">
    <!-- Blog header -->
    <v-row>
      <v-col>
        <h1 class="text-h3 font-weight-bold mb-1">{{ meta.title }}</h1>
        <div class="text-subtitle-2 text--secondary mb-3">{{ meta.date }}</div>

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

    <!-- Blog content -->
    <v-row>
      <v-col>
        <div class="blog-content">
          <template v-for="(block, idx) in blocks" :key="idx">
            <CodeBlock
              v-if="block.type === 'code'"
              :code="block.content"
              :language="block.language"
            />
            <p v-else class="text-block">{{ block.content }}</p>
          </template>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
import MarkdownIt from 'markdown-it'
import CodeBlock from './CodeBlock.vue'

interface BlogMeta {
  title: string
  date: string
  tags: string[]
  excerpt: string
}

interface Block {
  type: 'code' | 'text'
  content: string
  language?: string
}

export default defineComponent({
  name: 'BlogPage',
  components: { CodeBlock },
  props: {
    file: { type: String, required: true },
  },
  setup(props) {
    const meta = ref<BlogMeta>({
      title: '',
      date: '',
      tags: [],
      excerpt: '',
    })
    const blocks = ref<Block[]>([])

    function parseFrontMatter(md: string) {
      const match = /^---\n([\s\S]+?)\n---/.exec(md)
      const attributes: Record<string, string | string[]> = {}
      let body = md

      if (match && match[1]) {
        const yaml = match[1]
        body = md.slice(match[0].length).trim()

        yaml.split('\n').forEach((line) => {
          const [key, ...rest] = line.split(':')
          if (!key) return
          let value: string | string[] = rest.join(':').trim()
          if (/^\[.*\]$/.test(value)) {
            value = value
              .replace(/^\[|\]$/g, '')
              .split(',')
              .map((v) => v.trim())
          }
          attributes[key.trim()] = value
        })
      }
      return { attributes, body }
    }

    function parseMarkdownToBlocks(mdText: string) {
      const md = new MarkdownIt({ html: true, linkify: true })
      const tokens = md.parse(mdText, [])
      const result: Block[] = []

      let paragraphContent = ''

      for (const token of tokens) {
        if (token.type === 'fence') {
          if (paragraphContent.trim()) {
            result.push({ type: 'text', content: paragraphContent.trim() })
            paragraphContent = ''
          }
          result.push({
            type: 'code',
            content: token.content,
            language: token.info || '',
          })
        } else if (token.type === 'inline' && token.content.trim()) {
          paragraphContent += token.content + ' '
        } else if (token.type === 'paragraph_close' && paragraphContent.trim()) {
          result.push({ type: 'text', content: paragraphContent.trim() })
          paragraphContent = ''
        }
      }

      if (paragraphContent.trim()) {
        result.push({ type: 'text', content: paragraphContent.trim() })
      }

      return result
    }

    onMounted(async () => {
      try {
        const url = `${import.meta.env.BASE_URL}articles/${props.file}`
        const res = await fetch(url)
        if (!res.ok) throw new Error(`Failed to fetch ${props.file}`)
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

        blocks.value = parseMarkdownToBlocks(parsed.body)
      } catch (err) {
        console.error('Error loading markdown:', err)
        blocks.value = [{ type: 'text', content: 'Error loading article.' }]
      }
    })

    return { meta, blocks }
  },
})
</script>

<style scoped>
.blog-content {
  line-height: 1.6;
  font-size: 1rem;
}

/* tighten text spacing around code */
.blog-content p.text-block {
  margin: 0.5em 0;
}

.blog-content h1,
.blog-content h2,
.blog-content h3,
.blog-content h4 {
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  font-weight: 600;
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
