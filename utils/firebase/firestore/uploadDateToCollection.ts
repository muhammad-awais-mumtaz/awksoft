import { addDoc, collection } from "firebase/firestore";
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
