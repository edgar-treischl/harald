<template>
  <div class="language-bar-wrapper">
    <h3 class="chart-title">Used Languages</h3>
    <div ref="chart" class="language-bar"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ResponsiveBar } from '@nivo/bar'

const chart = ref(null)

// Single stacked bar
const data = [
  {
    singleBar: 1,
    'HTML/CSS': 24.3,
    R: 23.4,
    'JS/TS': 16.2,
    Docker: 13.5,
    Shell: 12.6,
    Others: 5.41,
    Python: 4.5
  }
]

const keys = ['HTML/CSS','R','JS/TS','Docker','Shell','Others','Python']

onMounted(async () => {
  await nextTick()
  requestAnimationFrame(() => {
    const root = ReactDOM.createRoot(chart.value)

    root.render(
      React.createElement(ResponsiveBar, {
        data,
        keys,
        indexBy: 'singleBar',
        layout: 'horizontal',
        colors: { scheme: 'nivo' },
        padding: 0.3,
        margin: { top: 50, right: 20, bottom: 40, left: 20 },

        axisLeft: null,
        axisBottom: {
          legend: 'Percentage Language Usage',
          legendOffset: 32,
          legendPosition: 'middle',
          tickSize: 0
        },

        label: d => `${d.value}%`,
        labelSkipWidth: 12,
        labelTextColor: { from: 'color', modifiers: [['darker', 1.4]] },

        // ✅ Horizontal legend above the bar
        legends: [
          {
            dataFrom: 'keys',
            anchor: 'top',
            direction: 'row',
            justify: false,
            translateY: -30,
            itemWidth: 80,
            itemHeight: 20,
            itemsSpacing: 8,
            symbolSize: 12,
            symbolShape: 'circle'
          }
        ],

        // ✅ Tooltip
        tooltip: ({ id, value, color }) => (
          React.createElement('div', {
            style: {
              padding: '6px 10px',
              color: '#fff',
              background: color,
              borderRadius: '4px',
              fontSize: '13px'
            }
          }, `${id}: ${value} %`)
        ),

        theme: {
          grid: { line: { stroke: '#e0e0e0' } },
          labels: { text: { fontSize: 12 } }
        }
      })
    )
  })
})
</script>

<style scoped>
.language-bar {
  height: 160px; /* single bar */
  width: 100%;
  min-width: 0;
}

.chart-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
}
</style>
