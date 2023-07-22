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
        <section className={styles.nevLinks}>
          {user && (
            <div>
              <Link href="/admin" onClick={handleClick}>
                Admin
              </Link>
            </div>
          )}
          <div>
            <Link href="/about" onClick={handleClick}>
              About
            </Link>
          </div>
          <div>
            <Link href="/blog" onClick={handleClick}>
              Blog
            </Link>
          </div>
          {!user && (
            <div>
              <Link href="/logIn" onClick={handleClick}>
                Log in
              </Link>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
