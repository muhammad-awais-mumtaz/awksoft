import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import { app } from "../initFirebase";

const storage = getStorage(app);

// Function to upload an image file
export const uploadImage = async (
  storagePath: string,
  file: File
): Promise<string> => {
  try {
    const storageRef = ref(storage, "" + storagePath + file.name);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};
