import { ref, getDownloadURL, listAll, uploadBytes } from 'firebase/storage';
import { fbStorage } from '@/requesters/firebase/_options.firebase';
// Формирование ссылки
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
// Загрузка файла в сторадж
export async function uploadImage(path, file) {
  const imageRef = ref(fbStorage, path);
  const imageName = file.name;
  const spaceRef = ref(imageRef, imageName);
  return await uploadBytes(spaceRef, file).then(snapshot => {
    return snapshot;
  });
}
