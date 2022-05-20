import { createRouter, createWebHistory } from 'vue-router';
import { APP_CONFIGS } from '@/services/_env-vars.service';
import { routes } from '@/router/routes';

const router = createRouter({
  history: createWebHistory(APP_CONFIGS.BASE_URL),
  routes,
});
export default router;
