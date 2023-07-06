"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../../../utils/firebase/auth/useAuth";
import { auth } from "../../../utils/firebase/initFirebase";
import Link from "next/link";
import Image from "next/image";

export default function Admin() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/logIn");
    auth.signOut();
  };

  const user = useAuth();
  // Use the user's authentication state

  if (user) {
    return (
      <>
        {user.photoURL && (
          <Image
            src={user.photoURL}
            height={50}
            width={50}
            alt={"picture of " + user.displayName}
          />
        )}
        <div>
          Welcome, {user.email}! {user.photoURL}
        </div>
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
