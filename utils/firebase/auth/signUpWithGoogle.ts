import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../initFirebase";
const provider = new GoogleAuthProvider();

export async function signUserWithGoogleProvider() {
  let result = null,
    error = null;
  try {
    result = await signInWithPopup(auth, provider);
  } catch (e: any) {
    error = e;
  }

  return { result, error };
}
