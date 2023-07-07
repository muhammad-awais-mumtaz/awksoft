"use client";
import styles from "./admin.module.css";
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
      <div className={styles.cont}>
        {user.photoURL && (
          <Image
            src={user.photoURL}
            height={50}
            width={50}
            alt={"picture of " + user.displayName}
          />
        )}
        <div>Welcome, {user.email}!</div>
        <button onClick={handleClick}>log out</button>
      </div>
    );
  } else {
    // User is signed out
    return (
      <>
        <div className={styles.cont}>
          Please <Link href={"/logIn"}>log in</Link> to access this content.
        </div>
      </>
    );
  }
}
