import {
  getStorage,
  ref,
  uploadBytes,
  uploadString,
  getDownloadURL,
  listAll,
  getMetadata,
} from "firebase/storage";

import { app } from "./firebase";

const storage = getStorage(app);

//uploadImage
export const addTask = (file, name, uid) => {
  const storageRef = ref(storage, `${uid}/${name}`);
  // uploadBytes(storageRef, file).then((snapshot) => {
  //   console.log("Uploaded a blob or file!");
  // });
  const message = "Test";
  uploadString(storageRef, message).then((snapshot) => {
    console.log("Uploaded a raw string!");
  });
};

export const downloadTask = async () => {
  const url = await getDownloadURL(ref(storage, `uuid/name`));
  // This can be downloaded directly:
  return url;
};

export const downloadTasks = async (uid) => {
  const listRef = ref(storage, uid);

  try {
    const list = await listAll(listRef);
    return await Promise.all(
      list.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        const { name } = await getMetadata(itemRef);
        return { url, name };
      })
    );
  } catch (error) {
    console.log(
      "🚀 ~ file: storage.js ~ line 32 ~ downloadImages ~ error",
      error
    );
  }
};
