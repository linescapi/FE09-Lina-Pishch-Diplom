import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app);

export const sendData = async (data, uid) => {
  await setDoc(doc(db, "users", uid), { ...data });
};

export const readData = async (uid) => {
  try {
    const response = await getDoc(doc(db, "users", uid));
    return await response.data();
  } catch (error) {
    console.log(error);
  }
};
