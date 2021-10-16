// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB28BSBIPoRpUoh9dOCFnRS-0KqpJwemsQ",
  authDomain: "task-app-by-lina-pisc.firebaseapp.com",
  projectId: "task-app-by-lina-pisc",
  storageBucket: "task-app-by-lina-pisc.appspot.com", //gs://task-app-by-lina-pisc.appspot.com/
  messagingSenderId: "151399164203",
  appId: "1:151399164203:web:9ead7e3b37f1ca23b7fd6e",
  measurementId: "G-6874R9GG2K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
