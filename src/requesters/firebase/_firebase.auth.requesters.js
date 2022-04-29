import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();

signInAnonymously(auth)
  .then(() => {
    // Signed in..
  })
  .catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });

onAuthStateChanged(auth, user => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
  } else {
    console.log('Error:(');
  }
});
