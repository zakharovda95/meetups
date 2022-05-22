export const MeetupsRoutes = [
  {
    path: 'organizer',
    name: 'organizer',
    component: () => import('@/pages/MainPage.vue'),
  },
  {
    path: 'participant',
    name: 'participant',
    component: () => import('@/pages/MainPage.vue'),
  },
];
