export const MeetupsRoutes = [
  {
    path: 'organizer',
    name: 'organizer',
    component: () => import('@/pages/MeetupsIOrganizedPage.vue'),
  },
  {
    path: 'participant',
    name: 'participant',
    component: () => import('@/pages/MeetupsIParticipatePage.vue'),
  },
];
