import {
  ref,
  getDownloadURL,
  listAll,
  uploadBytes,
  deleteObject,
} from 'firebase/storage';
import { fbStorage } from '@/requesters/firebase/_options.firebase';

/** Ссылка для загрузки/отображения **/
export function fbGetStorageDataLink(path) {
  return getDownloadURL(ref(fbStorage, path));
}

/** Список иконок **/
export function fbCreateIconsList(action, path) {
  listAll(ref(fbStorage, path)).then(res =>
    res.items.forEach(async item => {
      const link = await fbGetStorageDataLink(item);
      action('setIcons', { name: item.name, url: link });
    }),
  );
}

/** Ссылка на файл **/
export function fbCreateStorageImageUrl(path, file) {
  return ref(ref(fbStorage, path), file.name);
}

/** Загрузка в хранилище **/
export function fbUploadImage(path, file) {
  const ref = fbCreateStorageImageUrl(path, file);
  return uploadBytes(ref, file).then(snapshot => {
    return snapshot;
  });
}

/** Удаление их хранилища **/
export function fbRemoveImage(path) {
  deleteObject(ref(fbStorage, path))
    .then(() => {
      console.log('Удалено!');
    })
    .catch(error => {
      console.log('Ошибка!' + error);
    });
}
