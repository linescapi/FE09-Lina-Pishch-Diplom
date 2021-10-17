import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "task-app-by-lina-pisc.firebaseapp.com",
  databaseURL: "https://task-app-by-lina-pisc-default-rtdb.firebaseio.com",
  projectId: "task-app-by-lina-pisc",
  storageBucket: "task-app-by-lina-pisc.appspot.com",
  appId: "1:151399164203:web:9ead7e3b37f1ca23b7fd6e",
  measurementId: "G-6874R9GG2K",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
