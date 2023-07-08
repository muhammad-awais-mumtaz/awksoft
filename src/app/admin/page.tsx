"use client";
import styles from "./admin.module.css";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../utils/firebase/auth/useAuth";
import Link from "next/link";
import LogedInAdminServiceProvider from "../../../components/logedInAdminServiceProvider/logedInAdminServiceProvider";

export default function Admin() {
  const router = useRouter();

  const user = useAuth();
  // Use the user's authentication state

  if (user) {
    return (
      <div className={styles.cont}>
        <LogedInAdminServiceProvider />
      </div>
    );
  } else {
    // User is signed out
    return (
      <>
        <div className={styles.cont}>
          Please <Link href={"/logIn"}> log in </Link> to access this content.
        </div>
      </>
    );
  }
}
