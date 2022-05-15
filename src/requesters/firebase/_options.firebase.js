import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { APP_CONFIGS } from '@/services/_env-vars.service';

/** Конфиги firebase **/
const fbApp = initializeApp({
  // apiKey: 'AIzaSyCGNfhjhWS5MqYUNcrdgTU1wpJrWkaNKq0',
  // authDomain: 'meetups-ddc9b.firebaseapp.com',
  // databaseURL: 'https://meetups-ddc9b-default-rtdb.firebaseio.com',
  // projectId: 'meetups-ddc9b',
  // storageBucket: 'meetups-ddc9b.appspot.com',
  // messagingSenderId: '162190157204',
  // appId: '1:162190157204:web:5f301b4bd46bb332d49b81',
  // measurementId: 'G-42DZTH1J43',

  apiKey: APP_CONFIGS.API_KEY,
  authDomain: APP_CONFIGS.AUTH_DOMAIN,
  databaseURL: APP_CONFIGS.DATABASE_URL,
  projectId: APP_CONFIGS.PROJECT_ID,
  storageBucket: APP_CONFIGS.STORAGE_BUCKET,
  messagingSenderId: APP_CONFIGS.MESSAGING_SENDER_ID,
  appId: APP_CONFIGS.APP_ID,
  measurementId: APP_CONFIGS.MEASUREMENT_ID,
});
console.log(APP_CONFIGS);
export const fbDb = getDatabase(fbApp);
export const fbStorage = getStorage(fbApp);
export const fbAuth = getAuth(fbApp);
