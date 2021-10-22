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

// //getAllTodos
// export const getTasks = (request, response) => {
//   db.collection("tasks")
//     .orderBy("text", "id")
//     .get()
//     .then((data) => {
//       let tasks = [];
//       data.forEach((doc) => {
//         tasks.push({
//           taskId: doc.id,
//           text: doc.data().text,
//           day: doc.data().day,
//           checked: doc.data().checked,
//         });
//       });
//       return response.json(tasks);
//     })
//     .catch((err) => {
//       console.error(err);
//       return response.status(500).json({ error: err.code });
//     });
// };
