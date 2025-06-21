import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ApiSearch from '../views/ApiSearch.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/api',
    name: 'ApiSearch',
    component: ApiSearch
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
