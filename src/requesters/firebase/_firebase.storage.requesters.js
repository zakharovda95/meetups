import { ref, getDownloadURL, listAll } from 'firebase/storage';
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
