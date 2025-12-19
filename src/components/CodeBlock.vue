<template>
  <pre class="code-block">
    <button class="copy-btn" @click="copyCode">{{ copied ? 'Copied!' : 'Copy' }}</button>
    <code v-html="highlightedCode"></code>
  </pre>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css' // required for syntax highlighting

export default defineComponent({
  name: 'CodeBlock',
  props: {
    code: { type: String, required: true },
    language: { type: String, default: '' },
  },
  setup(props) {
    const copied = ref(false)

    // Remove empty lines at the start and end, preserve indentation
    const rawLines = props.code.split('\n')
    let start = 0
    let end = rawLines.length - 1

    while (start <= end && rawLines[start].trim() === '') start++
    while (end >= start && rawLines[end].trim() === '') end--

    const trimmedCode = rawLines.slice(start, end + 1).join('\n')

    const highlightedCode =
      props.language && hljs.getLanguage(props.language)
        ? hljs.highlight(trimmedCode, { language: props.language }).value
        : hljs.highlightAuto(trimmedCode).value

    function copyCode() {
      navigator.clipboard.writeText(trimmedCode).then(() => {
        copied.value = true
        setTimeout(() => (copied.value = false), 1500)
      })
    }

    return { highlightedCode, copyCode, copied }
  },
})
</script>

<style scoped>
.code-block {
  position: relative;
  padding: 0.25em 0.6em;  /* ultra-tight padding */
  border-radius: 6px;
  background-color: #f5f5f5;
  overflow: auto;
  font-size: 0.95rem;
  margin: 0.5em 0;        /* small margin to separate from text */
  line-height: 1.25;      /* tight line spacing */
}

.code-block code {
  display: block;
  white-space: pre;       /* preserve indentation and line breaks */
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
