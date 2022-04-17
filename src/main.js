import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import 'material-design-lite/material.min.css';
import 'material-design-lite/material.min.js';
// import { getStorageDataLink } from '@/api/firebase/_firebase.storage.services';

createApp(App).use(store).use(router).mount('#app');

// import { setFirebaseData } from '@/api/firebase/_firebase.services';
// setFirebaseData('meetups', meetups);
// async function link() {
//   return await getStorageDataLink('covers/meetup_adventure_cover.jpg');
// }
// console.log(link());

// import { setFirebaseData } from '@/requesters/firebase/_firebase.database.requesters.js';
// import { meetups } from '@/api/localDataBase/formatedMeetups';
// setFirebaseData('/meetups', meetups);
