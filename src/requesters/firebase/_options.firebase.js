import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const fbApp = initializeApp({
  apiKey: 'AIzaSyCGNfhjhWS5MqYUNcrdgTU1wpJrWkaNKq0',
  authDomain: 'meetups-ddc9b.firebaseapp.com',
  databaseURL: 'https://meetups-ddc9b-default-rtdb.firebaseio.com',
  projectId: 'meetups-ddc9b',
  storageBucket: 'meetups-ddc9b.appspot.com',
  messagingSenderId: '162190157204',
  appId: '1:162190157204:web:5f301b4bd46bb332d49b81',
  measurementId: 'G-42DZTH1J43',
});
const fbDb = getDatabase(fbApp);
const fbStorage = getStorage(fbApp);

export { fbDb, fbStorage };
