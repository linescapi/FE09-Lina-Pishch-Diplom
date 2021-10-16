import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  getMetadata,
} from "firebase/storage";

import { app } from "./firebase";

const storage = getStorage(app);

export const uploadImage = (file, name, uid) => {
  const storageRef = ref(storage, `${uid}/${name}`);
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
};

export const downloadImage = async () => {
  const url = await getDownloadURL(ref(storage, `uuid/name`));
  // This can be downloaded directly:
  return url;
};

export const downloadImages = async (uid) => {
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
