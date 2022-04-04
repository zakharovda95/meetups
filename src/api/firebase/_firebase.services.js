import { get, ref, set } from 'firebase/database';
import { fbDb } from '@/api/firebase/_options.firebase';

// Запись данных в БД
export async function setFirebaseData(data) {
  await set(ref(fbDb), data);
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
