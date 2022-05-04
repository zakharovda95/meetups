import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import 'material-design-lite/material.min.css';
import Toaster from '@meforma/vue-toaster';
import UUID from 'vue-uuid';
// import { getStorageDataLink } from '@/api/firebase/_firebase.storage.services';

const app = createApp(App);
app.use(Toaster);
app.use(store);
app.use(router);
app.use(UUID);
app.mount('#app');
//import { meetups } from '@/api/localDataBase/formatedMeetups';
// import { setFirebaseData } from '@/requesters/firebase/_firebase.database.requesters';
// setFirebaseData('meetups', meetups);
// async function link() {
//   return await getStorageDataLink('covers/meetup_adventure_cover.jpg');
// }
// console.log(link());

// import { setFirebaseData } from '@/requesters/firebase/_firebase.database.requesters.js';
// import { meetups } from '@/api/localDataBase/formatedMeetups';
// setFirebaseData('/meetups', meetups);
