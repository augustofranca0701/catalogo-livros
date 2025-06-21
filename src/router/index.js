import { createRouter, createWebHistory } from 'vue-router'
import LivroForm from '../components/LivroForm.vue'
import LivroList from '../components/LivroList.vue'
import ApiLivros from '../components/ApiLivros.vue'

const routes = [
  {
    path: '/',
    name: 'ListaLivros',
    component: LivroList
  },
  {
    path: '/novo',
    name: 'LivroForm',
    component: LivroForm
  },
  {
    path: '/api',
    name: 'ApiLivros',
    component: ApiLivros
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
