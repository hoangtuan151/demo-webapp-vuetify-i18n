import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeLayout from '@/views/HomeLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: 'recent',
        alias: '/',
        component: () => import(/* webpackChunkName: "recent_page" */ '@/views/RecentPage')
      }, {
        path: 'favorite',
        component: () => import(/* webpackChunkName: "favorite_page" */ '@/views/FavoritePage')
      }
    ]
  }, {
    path: '/login',
    component: () => import(/* webpackChunkName: "login_page" */ '@/views/LoginPage')
  }
]

const router = new VueRouter({
  routes
})

export default router
