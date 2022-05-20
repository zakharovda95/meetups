export const CreateAndEditRoutes = [
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
];
