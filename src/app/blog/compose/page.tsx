"use client";
import styles from "./compose.module.css";
import Link from "next/link";

import { useAuth } from "../../../../utils/firebase/auth/useAuth";
import JoditReactComp from "../../../../components/joditReactComp/joditReactComp";

export default function Compose() {
  const user = useAuth();
  if (user) {
    return (
      <>
        <div className={styles.cont}>
          <JoditReactComp />
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
