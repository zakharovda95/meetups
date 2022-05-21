export function checkLocalStorageUserToken() {
  return (
    localStorage.getItem('user_token') !== 'undefined' ||
    localStorage.getItem('user_token') !== null ||
    localStorage.getItem('user_token') !== undefined
  );
}
