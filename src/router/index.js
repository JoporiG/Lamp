import Vue from 'vue'
import VueRouter from 'vue-router'
import Off from '../views/Off.vue'
import On from '../views/On.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Off
  },
  {
    path: '/off',
    name: 'off',
    component: Off
  },
  {
    path: '/on',
    name: 'on',
    component: On
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
