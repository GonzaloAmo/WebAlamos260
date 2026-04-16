import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HistoriaView from '../views/HistoriaView.vue'
import SeccionesView from '../views/SeccionesView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/HomeView',
      redirect: '/',
    },
    {
      path: '/historia',
      name: 'historia',
      component: HistoriaView,
    },
    {
      path: '/secciones',
      name: 'secciones',
      component: SeccionesView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router