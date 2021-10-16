import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB28BSBIPoRpUoh9dOCFnRS-0KqpJwemsQ",
  authDomain: "task-app-by-lina-pisc.firebaseapp.com",
  projectId: "task-app-by-lina-pisc",
  storageBucket: "task-app-by-lina-pisc.appspot.com", //gs://task-app-by-lina-pisc.appspot.com/
  messagingSenderId: "151399164203",
  appId: "1:151399164203:web:9ead7e3b37f1ca23b7fd6e",
  measurementId: "G-6874R9GG2K",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}
