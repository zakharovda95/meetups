import { createUserWithEmailAndPassword } from 'firebase/auth';
import { fbAuth } from '@/requesters/firebase/_options.firebase';

export function register(email, password) {
  createUserWithEmailAndPassword(fbAuth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch(error => {
      console.log(error.code);
      console.log(error.message);
    });
}
