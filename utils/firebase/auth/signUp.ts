import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../initFirebase";

export default async function signUp(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(result.user);
  } catch (e: any) {
    error = e;
  }

  return { result, error };
}
