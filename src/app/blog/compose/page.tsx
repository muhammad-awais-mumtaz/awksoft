"use client";
import styles from "./compose.module.css";
import TinyMCEComp from "../../../../components/tinyMCEComp/tinyMCEComp";
import Link from "next/link";

import { useAuth } from "../../../../utils/firebase/auth/useAuth";

export default function Compose() {
  const user = useAuth();
  if (user) {
    return (
      <>
        <div className={styles.cont}>
          <TinyMCEComp />
        </div>
      </>
    );
  } else {
    return (
      <div className={styles.cont}>
        <p>
          You are not log in.
          <Link href={"/logIn"} className={styles.warn}>
            {" "}
            Log in{" "}
          </Link>{" "}
          please!
        </p>
      </div>
    );
  }
}
