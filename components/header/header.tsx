"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import MobileMenu from "./mobileNav/mobileNav";

export default function Header() {
  let [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
    console.log(clicked + "hello");
  }
  return (
    <>
      <div className={styles.cont}>
        <section className={styles.logo}>
          <h1>Awksoft</h1>
        </section>
        <section className={styles.nevLinks}>
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/">About</Link>
          </div>
          <div>
            <Link href="/">Blog</Link>
          </div>
          <div>
            <Link href="/">Sign Up</Link>
          </div>
        </section>
        <GiHamburgerMenu
          className={`${styles.hamCont} ${clicked ? styles.hide : styles.show}`}
          onClick={handleClick}
        />
        <div
          className={`${styles.mobCont} ${clicked ? styles.show : styles.hide}`}
        >
          <MobileMenu clickedTogglerVar={clicked} clickSetter={setClicked} />
        </div>
      </div>
    </>
  );
}
