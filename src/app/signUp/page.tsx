import styles from "./signUp.module.css";

import Image from "next/image";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";

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
          <h1>Sign up for Awksoft</h1>
          <form className={styles.form} action="/send-data-here" method="post">
            <div className={styles.name}>
              <label className={styles.block} htmlFor="name">
                Name
              </label>
              <input
                className={`${styles.block} ${styles.input}`}
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
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
              <button type="submit">Sign up</button>
              <button type="submit">
                Sign Up with <FcGoogle />
              </button>
              <button type="submit">
                Sign Up with <GrFacebook />
              </button>
            </div>
            <div>
              Have an account? <Link href="/logIn"> Log in</Link>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
