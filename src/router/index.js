import { createRouter, createWebHistory } from 'vue-router'
import level1 from '../views/level1.vue'

const routes = [
  {
    path: '/',
    name: 'level1',
    component: level1
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
