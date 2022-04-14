import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: { name: 'meetups' },
    component: () => import('@/layouts/MainPageLayout.vue'),
    children: [
      {
        path: 'meetups',
        name: 'meetups',
        component: () => import('@/views/MainPage.vue'),
      },
    ],
  },
  {
    path: '/meetup',
    name: 'meetup',
    redirect: { name: 'meetupById' },
    component: import('@/layouts/MeetupPageLayout.vue'),
    children: [
      {
        path: ':meetupId',
        name: 'meetupById',
        component: () => import('@/views/MeetupPage.vue'),
      },
    ],
    meta: {
      showReturnToMeetupList: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
