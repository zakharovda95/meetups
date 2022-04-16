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
      {
        path: 'calendar',
        name: 'calendar',
        component: () => import('@/views/CalendarPage.vue'),
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
        redirect: { name: 'description' },
        component: () => import('@/views/MeetupPage.vue'),
        children: [
          {
            path: 'description',
            name: 'description',
            component: () =>
              import('@/components/meetupPage/MeetupDescription.vue'),
          },
          {
            path: 'agenda',
            name: 'agenda',
            component: () => import('@/components/meetupPage/MeetupAgenda.vue'),
          },
        ],
      },
    ],
    meta: {
      showReturnToMeetupList: true,
    },
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/layouts/AuthPageLayout.vue'),
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('@/layouts/AuthPageLayout.vue'),
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('@/layouts/AuthPageLayout.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
