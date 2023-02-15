import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBindingView from '../views/DataBindingView.vue'
import EventView from '../views/EventView.vue'
import ComputedView from '../views/ComputedView.vue'
import WatchView from '../views/WatchView.vue'
import DataBindingListView from '../views/DataBindingListView.vue'
import NestedView from '../views/NestedComponentView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackPrefetch: true */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DataBindingView
  },
  {
    path: '/event',
    name: 'EventClick',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: EventView
  },
  {
    path: '/computed',
    name: 'Computed',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ComputedView
  },
  {
    path: '/watch',
    name: 'Watch',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: WatchView
  },
  {
    path: '/api/list',
    name: 'DataBindingListView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DataBindingListView
  },
  {
    path: '/nested',
    name: 'Nested',
    component: NestedView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
