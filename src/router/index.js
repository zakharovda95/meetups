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
        component: () => import('@/pages/MainPage.vue'),
      },
      {
        path: 'calendar',
        name: 'calendar',
        component: () => import('@/pages/CalendarPage.vue'),
      },
    ],
  },
  {
    path: '/meetup',
    name: 'meetup',
    redirect: { name: 'meetupById' },
    component: () => import('@/layouts/MeetupPageLayout.vue'),
    children: [
      {
        path: ':meetupId',
        name: 'meetupById',
        redirect: { name: 'description' },
        component: () => import('@/pages/MeetupPage.vue'),
        children: [
          {
            path: 'description',
            name: 'description',
            component: () =>
              import('@/components/sections/MeetupPage/MeetupDescription.vue'),
          },
          {
            path: 'agenda',
            name: 'agenda',
            component: () =>
              import('@/components/sections/MeetupPage/MeetupAgenda.vue'),
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
    redirect: { name: 'registration' },
    component: () => import('@/layouts/AuthPageLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/pages/LoginPage.vue'),
      },
      {
        path: 'registration',
        name: 'registration',
        component: () => import('@/pages/RegistrationPage.vue'),
      },
    ],
  },
  {
    path: '/meetups',
    alias: '/admin',
    name: 'createEdit',
    redirect: { name: 'create' },
    component: () => import('@/layouts/CreateEditLayout.vue'),
    children: [
      {
        path: 'create',
        name: 'create',
        component: () => import('@/pages/CreatePage.vue'),
      },
      {
        path: ':meetupId/edit',
        name: 'edit',
        component: () => import('@/pages/EditPage.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
