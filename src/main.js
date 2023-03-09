import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import ViewNote from '@/views/ViewNote.vue'
import ViewStats from '@/views/ViewStats.vue'

import App from './App.vue'

// import './assets/main.css'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'notes',
      component: ViewNote
    },
    {
      path: '/stats',
      name: 'stats',
      component: ViewStats
    }
  ]
})

createApp(App).use(router).mount('#app')
