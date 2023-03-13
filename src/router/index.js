import { createRouter, createWebHistory } from 'vue-router'
import Counter from '../components/Counter.vue'
import NotFound from '../components/NotFound.vue'
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/counter',
    name: 'Counter',
    component: Counter
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
