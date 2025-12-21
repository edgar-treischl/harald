<template>
  <div class="tree-map-wrapper">
    <h3 class="chart-title">Repositories per Topic (Top 12 + Others)</h3>
    <div ref="chart" class="tree-map"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ResponsiveTreeMap } from '@nivo/treemap'

const chart = ref(null)

const topic_counts_simplified = [
  { topics: 'Apps', n: 24 },
  { topics: 'Automation', n: 26 },
  { topics: 'Docker', n: 21 },
  { topics: 'Git', n: 18 },
  { topics: 'Others', n: 14 },
  { topics: 'Frontend', n: 13 },
  { topics: 'Testing', n: 13 },
  { topics: 'Validation', n: 12 },
  { topics: 'DevOps', n: 11 },
  { topics: 'Analytics', n: 6 },
  { topics: 'Personal', n: 6 },
  { topics: 'API', n: 5 },
  { topics: 'Documentation', n: 5 }
]

const data = {
  name: 'topics',
  children: topic_counts_simplified.map(t => ({ name: t.topics, loc: t.n }))
}

onMounted(async () => {
  await nextTick()
  requestAnimationFrame(() => {
    const root = ReactDOM.createRoot(chart.value)

    root.render(
      React.createElement(ResponsiveTreeMap, {
        data,
        identity: 'name',
        value: 'loc',
        valueFormat: '.0f',
        margin: { top: 10, right: 10, bottom: 10, left: 10 },
        label: d => {
          const maxChars = Math.floor(d.width / 7)
          return d.id.length > maxChars ? d.id.slice(0, maxChars) + '…' : d.id
        },
        labelSkipSize: 10,
        labelTextColor: { from: 'color', modifiers: [['darker', 2]] },
        theme: {
          labels: {
            text: {
              fontSize: 14,
              fontWeight: 600
            }
          }
        },
        borderColor: { from: 'color', modifiers: [['darker', 0.1]] },
        colors: { scheme: 'nivo' }
      })
    )
  })
})
</script>

<style scoped>
.tree-map {
  height: 400px;
  width: 100%;
  min-width: 0;
}

.chart-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
}
</style>
