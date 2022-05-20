import { MeetupByIdRoutes } from '@/router/modules/MeetupPageRoutes/meetup-by-id.routes';

export const MeetupPageRoutes = [
  {
    path: ':meetupId',
    name: 'meetupById',
    redirect: { name: 'description' },
    component: () => import('@/pages/MeetupPage.vue'),
    children: [...MeetupByIdRoutes],
  },
];
