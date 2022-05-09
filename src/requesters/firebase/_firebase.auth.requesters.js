import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { fbAuth } from '@/requesters/firebase/_options.firebase';

// регистрация
export function register(email, password) {
  return createUserWithEmailAndPassword(fbAuth, email, password)
    .then(userCredential => {
      return userCredential.user;
    })
    .catch(error => {
      return error.code + error.message;
    });
}
// вход
export function login(email, password) {
  return signInWithEmailAndPassword(fbAuth, email, password)
    .then(userCredential => {
      return userCredential.user;
    })
    .catch(error => {
      return error.code + error.message;
    });
}
