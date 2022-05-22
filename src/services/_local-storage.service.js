export function checkLocalStorageData(key) {
  return localStorage.getItem(key);
}

export function setLocalStorageData(key, uid) {
  localStorage.setItem(key, uid);
}

export function removeLocalStorageData(key) {
  localStorage.removeItem(key);
}

export function setObjectInLocalStorage(key, data) {
  setLocalStorageData(key, JSON.stringify(data));
}
