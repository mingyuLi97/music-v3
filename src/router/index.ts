import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/recommend/SongList',
      component: () => import('../views/recommend/SongList.vue')
    },
    {
      path: '/404',
      component: () => import('../views/404.vue')
    },
    { path: '/:pathMatch(.*)', redirect: '/404' }
  ]
});

export default router;
