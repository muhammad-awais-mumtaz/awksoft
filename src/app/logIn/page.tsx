import { Metadata } from "next";
import styles from "./logIn.module.css";

import Image from "next/image";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";

export const metadata: Metadata = {
  title: "Awksoft - Log in",
  description:
    "Log in to Awksoft and connect with a community of skilled development, marketing, and design professionals",
};

export default function SignUp() {
  return (
    <>
      <div className={styles.cont}>
        <section className={styles.imageSection}>
          <Image
            className={styles.image}
            src="/signUp/wallpaper.webp"
            alt="Image of a two developer hand shaking."
            height={320}
            width={320}
            priority
          />
        </section>
        <section className={styles.formCont}>
          <h1>Log in to Awksoft</h1>
          <form className={styles.form} action="/send-data-here" method="post">
            <div>
              <label className={styles.block} htmlFor="email">
                Email
              </label>
              <input
                className={`${styles.block} ${styles.input}`}
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div>
              <label className={styles.block} htmlFor="Password">
                Password
              </label>
              <input
                className={`${styles.block} ${styles.input}`}
                type="password"
                id="password"
                name="password"
                required
              />
            </div>
            <div className={styles.buttons}>
              <button type="submit">Log in</button>
              <button type="submit">
                Log in with <FcGoogle />
              </button>
              <button type="submit">
                Log in with <GrFacebook />
              </button>
            </div>
            <div>
              Don't have an account? <Link href="/signUp"> Sign up</Link>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
