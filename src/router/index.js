import { createRouter, createWebHistory } from 'vue-router'
import New from '../views/New.vue'
import Tasks from '../views/Tasks.vue'
import ActiveTasks from '../views/ActiveTasks.vue'
import ProgressTasks from '../views/ProgressTasks.vue'
import FinishedTasks from '../views/FinishedTasks.vue'
import NotFound from '../views/NotFound.vue'
import CanceledTasks from '../views/CanceledTasks.vue'
import Task from '../views/Task.vue'

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/active',
    name: 'ActiveTasks',
    component: ActiveTasks
  },
  {
    path: '/progress',
    name: 'ProgressTasks',
    component: ProgressTasks
  },
  {
    path: '/finished',
    name: 'FinishedTasks',
    component: FinishedTasks
  },
  {
    path: '/canceled',
    name: 'CanceledTasks',
    component: CanceledTasks
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
