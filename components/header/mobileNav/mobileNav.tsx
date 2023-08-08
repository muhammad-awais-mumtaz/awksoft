"use client";

import styles from "./mobileNav.module.css";
import Link from "next/link";

import { ImCross } from "react-icons/im";
import { useAuth } from "../../../utils/firebase/auth/useAuth";

export default function MobileMenu(props: {
  clickedTogglerVar: boolean;
  clickSetter: any;
}) {
  const user = useAuth();
  let { clickedTogglerVar, clickSetter } = props;

  function handleClick() {
    clickSetter(!clickedTogglerVar);
  }

  return (
    <div className={styles.mobileMenuCont}>
      <div className={styles.mobileMenu}>
        <section className={styles.crossDivCont}>
          <ImCross className={styles.crossDiv} onClick={handleClick} />
        </section>
        <section className={styles.buttons}>
          {user && (
            <Link href="/admin" onClick={handleClick} className={styles.btn}>
              Admin
            </Link>
          )}

          <Link href="/about" onClick={handleClick} className={styles.btn}>
            About
          </Link>

          <Link href="/blog" onClick={handleClick} className={styles.btn}>
            Blog
          </Link>

          {!user && (
            <Link href="/logIn" onClick={handleClick} className={styles.btn}>
              Log in
            </Link>
          )}
        </section>
      </div>
    </div>
  );
}
