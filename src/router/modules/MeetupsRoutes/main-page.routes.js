import { MeetupsRoutes } from '@/router/modules/MeetupsRoutes/meetups.routes';

export const MainPageRoutes = [
  {
    path: 'meetups',
    name: 'meetups',
    component: () => import('@/pages/MainPage.vue'),
    children: [...MeetupsRoutes],
  },
  {
    path: 'calendar',
    name: 'calendar',
    component: () => import('@/pages/CalendarPage.vue'),
  },
];
