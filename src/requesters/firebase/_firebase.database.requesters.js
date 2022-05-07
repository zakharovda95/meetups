import { get, ref, set } from 'firebase/database';
import { fbDb } from '@/requesters/firebase/_options.firebase';

// Запись данных в БД
export async function setFirebaseData(path, data) {
  await set(ref(fbDb, path), data);
}
// Получение данных из БД
export async function getFirebaseData(path) {
  return await get(ref(fbDb, path)).then(snapshot => {
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log('No Data:(');
    }
  });
}
// Удаление данных из БД
export async function removeFirebaseData(path) {
  await set(ref(fbDb, path), null);
}
