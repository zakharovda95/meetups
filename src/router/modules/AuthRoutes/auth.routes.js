export const AuthRoutes = [
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
];
