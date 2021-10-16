import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as fbSignOut,
} from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);

export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      console.log(error);
    });
};

export const singIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password).catch((error) => {
    console.log(error);
  });
};

export const listenToUserChange = (userChange) => {
  onAuthStateChanged(auth, (user) => {
    userChange(user);
  });
};

export const singOut = () => {
  fbSignOut(auth);
};
