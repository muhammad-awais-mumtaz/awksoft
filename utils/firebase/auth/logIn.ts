import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../initFirebase";

export default async function signIn(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e: any) {
    error = e;
  }

  return { result, error };
}
