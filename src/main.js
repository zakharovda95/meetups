import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import 'material-design-lite/material.min.css';
import Toaster from '@meforma/vue-toaster';
import UUID from 'vue-uuid';

const app = createApp(App);
app.use(Toaster);
app.use(store);
app.use(router);
app.use(UUID);
app.mount('#app');
