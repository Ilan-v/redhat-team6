import { createRouter, createWebHistory } from 'vue-router'
import CreateHelpSuggestion from '../views/CreateHelpSuggestion.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'createHelpSuggestion',
      component: CreateHelpSuggestion
    }
  ]
})

export default router
