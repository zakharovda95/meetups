import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: { name: 'meetups' },
    component: () => import('@/layouts/MainPageLayout.vue'),
    children: [
      {
        path: '/meetups',
        name: 'meetups',
        component: () => import('@/views/MainPage.vue'),
      },
      {
        path: '/meetups/:meetupId',
        name: 'meetup',
        component: () => import('@/views/MeetupPage.vue'),
        meta: {
          showReturnToMeetupList: true,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
