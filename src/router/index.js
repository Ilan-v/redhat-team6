import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import FindJobsView from '../views/FindJobsView.vue'
import CreateHelpSuggestion from '../views/CreateHelpSuggestion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        displayName: 'דף הבית'
      }
    },
    {
      path: '/find',
      name: 'FindJod',
      component: FindJobsView,
      meta: {
        displayName: 'מצא התנדבות'
      }
    },{
      path: '/createHelpSuggestion',
      name: 'createHelpSuggestion',
      component: CreateHelpSuggestion,
      meta: {
        displayName: 'ווא סלמו עליקום'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView ,
    },
  ]
})

export default router
