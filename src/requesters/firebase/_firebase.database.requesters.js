import { get, ref, set } from 'firebase/database';
import { fbDb } from '@/requesters/firebase/_options.firebase';

// Запись данных в БД
export async function setFirebaseData(path, data) {
  await set(ref(fbDb, path), data);
}
// Получение данных из БД
export function getFirebaseData(path) {
  return get(ref(fbDb, path)).then(snapshot => {
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log('No Data:(');
    }
  });
}