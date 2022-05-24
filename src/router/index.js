import { createRouter, createWebHashHistory } from 'vue-router';
import { APP_CONFIGS } from '@/services/_env-vars.service';
import { routes } from '@/router/routes';

const router = createRouter({
  history: createWebHashHistory(APP_CONFIGS.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    } else {
      return { top: 0, left: 0 };
    }
  },
});
export default router;
