export const MeetupByIdRoutes = [
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
];
