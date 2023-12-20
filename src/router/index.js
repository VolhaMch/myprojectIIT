
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/experience',
    name: 'experience',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "expwrience" */ '../views/experience-p.vue')
  },
  {
    path: '/skills',
    name:'skills',
    component: () => import(/* webpackChunkName: "skills" */ '../views/skills-p.vue')
  },
  {
    path: '/contactMe',
    name:'contactMe',
    component: () => import(/* webpackChunkName: "skills" */ '../views/contactMe.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
