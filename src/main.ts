// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // Import the router

import { registerPlugins } from '@/plugins'  // If you have plugins to register

import 'unfonts.css'  // If you're using custom fonts

const app = createApp(App)

registerPlugins(app)

app.use(router)  // Use the router
app.mount('#app')  // Mount the app to the DOM
