import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import 'material-design-lite/material.min.css';
import 'material-design-lite/material.min.js';

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
