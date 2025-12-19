<template>
  <pre class="code-block">
    <button class="copy-btn" @click="copyCode">{{ copied ? 'Copied!' : 'Copy' }}</button>
    <code v-html="highlightedCode"></code>
  </pre>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

export default defineComponent({
  name: 'CodeBlock',
  props: {
    code: { type: String, required: true },
    language: { type: String, default: '' },
  },
  setup(props) {
    const copied = ref(false)

    // Trim empty lines at start/end
    const trimmedCode = computed(() => {
      const lines = props.code.split('\n')
      let start = 0
      let end = lines.length - 1

      while (start <= end && typeof lines[start] === 'string' && lines[start]?.trim() === '') start++;
      while (end >= start && typeof lines[end] === 'string' && lines[end]?.trim() === '') end--;

      return lines.slice(start, end + 1).join('\n')
    })

    // Highlight code safely with runtime check and fallback
    const highlightedCode = computed(() => {
      const code = trimmedCode.value
      let highlighted: string | undefined

      if (props.language && hljs.getLanguage(props.language)) {
        const result = hljs.highlight(code, { language: props.language })
        highlighted = result && result.value ? result.value : undefined
      } else {
        const result = hljs.highlightAuto(code)
        highlighted = result && result.value ? result.value : undefined
      }

      // Fallback to raw code if highlighting fails
      return highlighted ?? code
    })

    // Copy to clipboard
    function copyCode() {
      navigator.clipboard.writeText(trimmedCode.value).then(() => {
        copied.value = true
        setTimeout(() => (copied.value = false), 1500)
      })
    }

    return {
      highlightedCode,
      copyCode,
      copied,
    }
  },
})
</script>

<style scoped>
.code-block {
  position: relative;
  padding: 0.25em 0.6em;
  border-radius: 6px;
  background-color: #f5f5f5;
  overflow: auto;
  font-size: 0.95rem;
  margin: 0.5em 0;
  line-height: 1.25;
}

.code-block code {
  display: block;
  white-space: pre;
}

.copy-btn {
  position: absolute;
  top: 0.15em;
  right: 0.15em;
  font-size: 0.7rem;
  padding: 0.2em 0.4em;
  border: none;
  border-radius: 4px;
  background: #1976d2;
  color: white;
  cursor: pointer;
}

.copy-btn:hover {
  background: #115293;
}
</style>