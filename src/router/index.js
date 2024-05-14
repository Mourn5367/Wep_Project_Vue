import { createRouter, createWebHistory } from 'vue-router'
import TitleView from '../views/TitleView.vue'
import AboutView from '../views/AboutView.vue'
import SearchView from '../views/SearchView.vue'
import SearchTest from '../views/SearchTest.vue'
const routes = [
  {
    path: '/',
    name: 'title',
    component: TitleView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: AboutView
  }
  ,
  {
    path: '/search',
    name: 'search',
    component: SearchView
  }
  ,
  {
    path: '/test',
    name: 'test',
    component: SearchTest
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
