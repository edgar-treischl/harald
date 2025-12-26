import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import Components from 'unplugin-vue-components/vite'
import Fonts from 'unplugin-fonts/vite'
import Pages from 'vite-plugin-pages'

import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    Vue({
      template: { transformAssetUrls },
    }),
    Vuetify(),
    Components(),
    Fonts({
      fontsource: {
        families: [
          {
            name: 'Roboto',
            weights: [400, 500],      // only the weights Vuetify uses
            styles: ['normal'],       // no italic
            subset: 'latin',          // only Latin characters
          },
          {
            name: 'DM Serif Display',
            weights: [400],           // header font
            styles: ['normal'],
            subset: 'latin',
          },
        ],
      },
    }),
    Pages({
      extensions: ['vue'], // only .vue pages
    }),
  ],
  optimizeDeps: {
    exclude: ['vuetify'],
  },
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  server: {
    port: 3000,
  },
})
