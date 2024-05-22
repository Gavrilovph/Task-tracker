import { createRouter, createWebHistory } from 'vue-router'
import New from '../views/New.vue'
import Tasks from '../views/Tasks.vue'
import Task from '../views/Task.vue'
import NotFound from '../views/notFound.vue'

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/new',
    name: 'New',
    component: New
  },
  {
    path: '/task/:id?',
    name: 'TaskDetail',
    component: Task,
    props: true
  },
  {
    path: '/:notFound(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
