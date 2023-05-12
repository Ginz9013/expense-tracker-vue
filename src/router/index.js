import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/Login.vue")
    },
    {
      path: '/personal-page',
      name: 'personal-page',
      component: () => import('../views/PersonalPage.vue')
    }
  ]
})

export default router
