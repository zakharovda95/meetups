import { MainPageRoutes } from '@/router/modules/MeetupsRoutes/main-page.routes';
import { MeetupPageRoutes } from '@/router/modules/MeetupPageRoutes/meetup-page.routes';
import { AuthRoutes } from '@/router/modules/AuthRoutes/auth.routes';
import { CreateAndEditRoutes } from '@/router/modules/CreateAndEditRoutes/create-and-edit.routes';

export const routes = [
  {
    path: '/',
    name: 'index',
    redirect: { name: 'meetups' },
    component: () => import('@/layouts/MainPageLayout.vue'),
    children: [...MainPageRoutes],
  },
  {
    path: '/meetup',
    name: 'meetup',
    redirect: { name: 'meetupById' },
    component: () => import('@/layouts/MeetupPageLayout.vue'),
    children: [...MeetupPageRoutes],
    meta: {
      showReturnToMeetupList: true,
    },
  },
  {
    path: '/auth',
    name: 'auth',
    redirect: { name: 'register' },
    component: () => import('@/layouts/AuthPageLayout.vue'),
    children: [...AuthRoutes],
  },
  {
    path: '/meetups',
    alias: '/admin',
    name: 'createEdit',
    redirect: { name: 'create' },
    component: () => import('@/layouts/CreateAndEditPageLayout.vue'),
    children: [...CreateAndEditRoutes],
  },
];
