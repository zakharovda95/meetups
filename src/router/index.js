import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/main',
    component: () => import('@/layouts/MainPageLayout.vue'),
    children: [
      {
        path: '/main',
        name: 'main',
        component: () => import('@/views/MainPage.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
