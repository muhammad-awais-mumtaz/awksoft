import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import { firestore } from "../initFirebase";

export function uploadDataToCollection(
  collectionName: string,
  dataObject: any
) {
  const collectionRef = collection(firestore, collectionName);
  addDoc(collectionRef, dataObject)
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}

export async function updateDataToCollection(
  collectionName: string,
  documentId: string,
  dataObject: any
) {
  const collectionRef = collection(firestore, collectionName);
  const documentRef = doc(collectionRef, documentId);
  await updateDoc(documentRef, dataObject);
}

export async function getDataFromCollection(collectionName: string) {
  try {
    const collectionRef = collection(firestore, collectionName);
    const querySnapshot = await getDocs(collectionRef);

    const data: any[] = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function deleteDocument(
  collectionName: string,
  documentId: string
): Promise<void> {
  const documentRef = doc(firestore, collectionName, documentId);
  await deleteDoc(documentRef);
}
