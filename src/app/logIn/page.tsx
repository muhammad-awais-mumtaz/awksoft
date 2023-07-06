"use client";
import { Metadata } from "next";
import styles from "./logIn.module.css";
import { FormEvent, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { useRouter } from "next/navigation";
import signIn from "../../../utils/firebase/auth/logIn";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { signUserWithGoogleProvider } from "../../../utils/firebase/auth/signUpWithGoogle";

export const metadata: Metadata = {
  title: "Awksoft - Log in",
  description:
    "Log in to Awksoft and connect with a community of skilled development, marketing, and design professionals",
};

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showUserNotFoundErr, setShowUserNotFoundErr] = useState(false);
  const [showWrongPassErr, setShowWrongPassErr] = useState(false);
  const [showError, setShowError] = useState(false);
  const router = useRouter();

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      if (error.code === "auth/user-not-found") {
        setShowUserNotFoundErr(!showUserNotFoundErr);
        console.log(error.code);
      } else if (error.code === "auth/wrong-password") {
        setShowWrongPassErr(!showWrongPassErr);
        console.log(error.code);
      } else {
        console.log(error.code);
        alert(error.code);
      }
    } else {
      // else successful
      console.log(result);
      return router.push("/admin");
    }
  };

  const handleGoogleLogin = async () => {
    const { result, error } = await signUserWithGoogleProvider();
    if (error) {
      if (error.code === "auth/popup-closed-by-user") {
        console.log(error.code);
        setShowError(!showError);
      } else {
        alert(error.code);
      }
    } else {
      console.log(result);
      router.push("/admin");
    }
  };

  return (
    <>
      <div className={styles.cont}>
        <section className={styles.imageSection}>
          <Image
            className={styles.image}
            src="/signUp/wallpaper.webp"
            alt="Image of a two developer hand shaking."
            height={250}
            width={250}
            priority
          />
        </section>
        <section className={styles.formCont}>
          <h1>Log in to Awksoft</h1>
          {showError && (
            <span className={styles.warn}>
              You closed the pop up login. It is safe and secure, provided by
              google <FcGoogle />.
            </span>
          )}
          <form className={styles.form} onSubmit={handleForm}>
            <div>
              {showUserNotFoundErr && (
                <span className={styles.warn}>
                  User not found! Check your email/password, try again
                </span>
              )}
            </div>
            <div>
              {showWrongPassErr && (
                <span className={styles.warn}>
                  Wrong password! Check your password, try again
                </span>
              )}
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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <label className={styles.block} htmlFor="Password">
                Password{" "}
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.showPassBtn}
                >
                  {showPassword ? <BiHide /> : <BiShowAlt />}
                </span>
              </label>
              <input
                className={`${styles.block} ${styles.input}`}
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className={styles.buttons}>
              <button type="submit" className={styles.button}>
                Log in
              </button>

              <span className={styles.button} onClick={handleGoogleLogin}>
                Log in with <FcGoogle />
              </span>
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
