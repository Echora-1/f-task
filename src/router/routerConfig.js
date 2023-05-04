import { AppLayoutsEnum } from '@/layouts/layoutsConfig'

export const RouteEnum = {
  home: {
    path: '/',
    name: 'home',
    component: '../views/HomeView.vue',
    meta: {
      layout: AppLayoutsEnum.home
    }
  },
  favorites: {
    path: '/favorites',
    name: 'favorites',
    component: '../views/FavoritesView.vue'
  },
  imageDetails: {
    path: '/image/',
    name: 'imageDetails',
    component: '../views/ImageDetailsView.vue'
  }
}
