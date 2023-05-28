"use client";

import styles from "./mobileNav.module.css";
import Link from "next/link";

import { ImCross } from "react-icons/im";

export default function MobileMenu(props: {
  clickedTogglerVar: boolean;
  clickSetter: any;
}) {
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
          <div>
            <Link href="/" onClick={handleClick}>
              Home
            </Link>
          </div>
          <div>
            <Link href="/" onClick={handleClick}>
              About
            </Link>
          </div>
          <div>
            <Link href="/" onClick={handleClick}>
              Blog
            </Link>
          </div>
          <div>
            <Link href="/" onClick={handleClick}>
              Sign Up
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
