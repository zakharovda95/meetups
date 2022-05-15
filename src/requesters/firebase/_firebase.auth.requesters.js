import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { fbAuth } from '@/requesters/firebase/_options.firebase';

/** Регистрация **/
export function fbRegister(email, password) {
  return createUserWithEmailAndPassword(fbAuth, email, password)
    .then(userCredential => {
      return userCredential.user;
    })
    .catch(error => {
      return error.code + error.message;
    });
}

/** Вход **/
export function fbLogin(email, password) {
  return signInWithEmailAndPassword(fbAuth, email, password)
    .then(userCredential => {
      return userCredential.user;
    })
    .catch(error => {
      return error.code + error.message;
    });
}

/** Выход **/
export async function fbLogout() {
  await signOut(fbAuth);
}
