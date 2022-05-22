/** Проверяем есть ли токен в локалсторадж **/
/** Это нужно для защищенных роутов чтобы предотвратить отображение данных, предназначенных для авторизованных пользователей **/
export function checkLocalStorageToken() {
  return localStorage.getItem('user_token');
}

export function updateToken(uid) {
  localStorage.setItem('user_token', uid);
}

export function removeToken() {
  localStorage.removeItem('user_token');
}
