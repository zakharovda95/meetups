import {
  ref,
  getDownloadURL,
  listAll,
  uploadBytes,
  deleteObject,
} from 'firebase/storage';
import { fbStorage } from '@/requesters/firebase/_options.firebase';
// Получение ссылки для загрузки/отображения
export function getStorageDataLink(path) {
  return getDownloadURL(ref(fbStorage, path));
}
// Формирование списка ссылок
export async function createIconsList(action, path) {
  await listAll(ref(fbStorage, path)).then(res =>
    res.items.forEach(async item => {
      const link = await getStorageDataLink(item);
      action('setMainPageIcons', { name: item.name, url: link });
    }),
  );
}
// Формирование ссылки на файл
export function createStorageImageUrl(path, file) {
  return ref(ref(fbStorage, path), file.name);
}

// Загрузка файла в сторадж
export async function uploadImage(path, file) {
  const ref = createStorageImageUrl(path, file);
  return await uploadBytes(ref, file).then(snapshot => {
    return snapshot;
  });
}
// Удаление файла из стораджа
export async function removeImage(path) {
  await deleteObject(ref(fbStorage, path))
    .then(() => {
      console.log('Удалено!');
    })
    .catch(error => {
      console.log('Ошибка!' + error);
    });
}
