<template>
  <div class="tree-map-wrapper">
    <h3 class="chart-title">Repositories by Topic</h3>
    <div ref="chart" class="tree-map"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ResponsiveTreeMap } from '@nivo/treemap'

const chart = ref(null)

// Nested topic groups
const grouped_topics = [
  {
    name: 'Development',
    children: [
      { name: 'Apps', loc: 24 },
      { name: 'Frontend', loc: 13 },
      { name: 'Validation', loc: 12 },
      { name: 'API', loc: 5 }
    ]
  },
  {
    name: 'DevOps',
    children: [
      { name: 'Automation', loc: 26 },
      { name: 'Docker', loc: 21 },
      { name: 'CI/CD', loc: 11 },
      { name: 'Testing', loc: 13 }
    ]
  },
  {
    name: 'Collaboration',
    children: [
      { name: 'Git', loc: 18 },
      { name: 'Documentation', loc: 5 }
    ]
  },
  {
    name: 'Others',
    children: [
      { name: 'Analytics', loc: 6 },
      { name: 'Personal', loc: 6 }
    ]
  }
]

const data = { name: 'topics', children: grouped_topics }

// Pick teal from Nivo palette: 0, 128, 128
const baseTeal = [6, 148, 148] // approximate RGB for teal

// Shade function for leaf nodes
const getShade = (value, min, max) => {
  const t = (value - min) / (max - min || 1)
  const lighten = 1 - t * 0.5 // bigger value = darker shade
  const [r, g, b] = baseTeal
  return `rgb(${Math.round(r * lighten)}, ${Math.round(g * lighten)}, ${Math.round(b * lighten)})`
}

// Precompute min/max per group
const groupMinMax = {}
grouped_topics.forEach(group => {
  const values = group.children.map(c => c.loc)
  groupMinMax[group.name] = { min: Math.min(...values), max: Math.max(...values) }
})

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
        label: d => d.id,
        labelSkipSize: 10,
        labelTextColor: '#fff',
        theme: { labels: { text: { fontSize: 14, fontWeight: 600 } } },
        borderColor: { from: 'color', modifiers: [['darker', 0.3]] },
        colors: d => {
          if (d.parent && d.parent.data.name !== 'topics') {
            const { min, max } = groupMinMax[d.parent.data.name]
            return getShade(d.value, min, max)
          }
          return `rgb(${baseTeal.join(',')})` // top-level group
        }
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
