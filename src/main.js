import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import 'material-design-lite/material.min.css';
import 'material-design-lite/material.min.js';

createApp(App).use(store).use(router).mount('#app');

//import { setFirebaseData } from '@/api/firebase/_firebase.services';
//import { meetups } from '@/api/localDataBase/formatedMeetups';
//import { links } from '@/api/localDataBase/links';
//setFirebaseData('meetups', meetups);
