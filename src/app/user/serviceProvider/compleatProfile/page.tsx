"use client";
import styles from "./compleatProfile.module.css";
import SkillForm from "../../../../../components/skillsForm/skillsForm";
import { useAuth } from "../../../../../utils/firebase/auth/useAuth";
import Link from "next/link";

export default function CompleatProfile() {
  const user = useAuth();

  if (user) {
    return (
      <div className={styles.cont}>
        <section className={styles.formCont}>
          <h1>Enter Your Details</h1>
          <SkillForm />
        </section>
        <section></section>
      </div>
    );
  } else {
    return (
      <div className={styles.cont}>
        Please <Link href={"/logIn"}> log in </Link> to access this content.
      </div>
    );
  }
}
