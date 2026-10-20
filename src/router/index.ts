import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HistoriaView from '../views/HistoriaView.vue'
import SeccionesView from '../views/SeccionesView.vue'
import ActividadesView from '../views/ActividadesView.vue'
import GaleriaView from '../views/GaleriaView.vue'
import NoticiasView from '../views/NoticiasView.vue'
import DocumentacionView from '../views/DocumentacionView.vue'
import ContactoView from '../views/ContactoView.vue'
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
      path: '/actividades',
      name: 'actividades',
      component: ActividadesView,
    },
    {
      path: '/galeria',
      name: 'galeria',
      component: GaleriaView,
    },
    {
      path: '/noticias',
      name: 'noticias',
      component: NoticiasView,
    },
    {
      path: '/documentacion',
      name: 'documentacion',
      component: DocumentacionView,
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactoView,
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