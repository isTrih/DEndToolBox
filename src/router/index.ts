import { createRouter, createWebHistory } from 'vue-router'
import ChapterRewards from '../views/ChapterRewards.vue'
import Home from '../views/Home.vue'
import Stash from '../views/Stash.vue'
import StashHistory from '@/views/StashHistory.vue'
import VendorRegex from '@/views/VendorRe.vue'
import Robots from '@/views/Robots/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/chaptersrewards',
      name: 'ChapterRewards',
      component: ChapterRewards,
    },
    {
      path: '/stash',
      name: 'Stash',
      component: Stash,
    },
    {
      path: '/stashhistory',
      name: 'StashHistory',
      component: StashHistory,
    },
    {
      path: '/vendorRegex',
      name: 'VendorRegex',
      component: VendorRegex,
    },
    {
      path: '/robots.txt',
      name: 'robots',
      component: Robots,
    },

  ],
})

export default router
