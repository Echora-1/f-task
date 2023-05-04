import { createRouter, createWebHistory } from 'vue-router'
import { loadLayoutMiddleware } from '@/router/middleware/loadLayout.middleware'
import { RouteEnum } from './routerConfig'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RouteEnum.home.path,
      name: RouteEnum.home.name,
      component: () => import(RouteEnum.home.component),
      meta: RouteEnum.home.meta
    },
    {
      path: RouteEnum.favorites.path,
      name: RouteEnum.favorites.name,
      component: () => import(RouteEnum.favorites.component)
    },
    {
      path: RouteEnum.imageDetails.path + ':id',
      name: RouteEnum.imageDetails.name,
      component: () => import(RouteEnum.imageDetails.component)
    }
  ]
})

router.beforeEach(loadLayoutMiddleware)
export default router
