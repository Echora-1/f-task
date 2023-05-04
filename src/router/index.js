import { createRouter, createWebHistory } from 'vue-router'
import { loadLayoutMiddleware } from '@/router/middleware/loadLayout.middleware'
import HomeView from '@/views/HomeView.vue'
import ImageDetailsView from '@/views/ImageDetailsView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import { RouteEnum } from './routerConfig'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RouteEnum.home.path,
      name: RouteEnum.home.name,
      component: HomeView,
      meta: RouteEnum.home.meta
    },
    {
      path: RouteEnum.favorites.path,
      name: RouteEnum.favorites.name,
      component: FavoritesView
    },
    {
      path: RouteEnum.imageDetails.path + ':id',
      name: RouteEnum.imageDetails.name,
      component: ImageDetailsView
    }
  ]
})

router.beforeEach(loadLayoutMiddleware)
export default router
