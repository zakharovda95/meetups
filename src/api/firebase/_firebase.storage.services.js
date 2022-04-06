import { ref, getDownloadURL } from 'firebase/storage';
import { fbStorage } from '@/api/firebase/_options.firebase';
// Формирование ссылки
export function getStorageDataLink(path) {
  return getDownloadURL(ref(fbStorage, path));
}
