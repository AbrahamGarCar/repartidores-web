import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Offline.vue')
  },
  // {
  //   path: '/restaurantes',
  //   name: 'Restaurantes',
  //   component: () => import('../views/Restaurants.vue')
  // },
  // {
  //   path: '/nosotros',
  //   name: 'Nosotros',
  //   component: () => import('../views/About.vue')
  // },
  // {
  //   path: '/mi-pedido',
  //   name: 'Track',
  //   component: () => import('../views/Track.vue')
  // },
  // {
  //   path: '/terminos-condiciones',
  //   name: 'Terminos',
  //   component: () => import('../views/Terms.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
