import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import 'material-design-lite/material.min.css';
import Toaster from '@meforma/vue-toaster';
import UUID from 'vue-uuid';

createApp(App).use(Toaster).use(store).use(router).use(UUID).mount('#app');
