"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../../../utils/firebase/auth/useAuth";
import { auth } from "../../../utils/firebase/initFirebase";
import Link from "next/link";

export default function Admin() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/logIn");
    auth.signOut();
  };

  const user = useAuth();
  // Use the user's authentication state

  if (user) {
    // User is signed in
    return (
      <>
        <div>Welcome, {user.email}!</div>
        <button onClick={handleClick}>log out</button>
      </>
    );
  } else {
    // User is signed out
    return (
      <>
        <div>
          Please <Link href={"/logIn"}>log in</Link> to access this content.
        </div>
      </>
    );
  }
}
