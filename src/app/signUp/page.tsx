"use client";
import styles from "./signUp.module.css";
import { Metadata } from "next";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { BiShowAlt, BiHide } from "react-icons/bi";
import signUp from "../../../utils/firebase/auth/signUp";
import { signUserWithGoogleProvider } from "../../../utils/firebase/auth/signUpWithGoogle";

export const metadata: Metadata = {
  title: "Awksoft - Sign up",
  description:
    "Join Awksoft and gain access to a global network of development, marketing, and design professionals.",
};

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const router = useRouter();

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      console.log(error);
      alert("Something went wrong. Check your internet or refresh the page.");
    }

    // else successful
    console.log(result);
    return router.push("/admin");
  };

  const handleSignupWithGoogle = async () => {
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

  // Check password format
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,256}$/gm;

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
          <h1>Sign up for Awksoft</h1>
          {showError && (
            <span className={styles.warn}>
              You closed the pop up sign up. It is safe and secure, provided by{" "}
              <FcGoogle />.
            </span>
          )}
          <form className={styles.form} onSubmit={handleForm}>
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
              {!passwordRegex.test(password) ? (
                <span className={styles.warn}>
                  Password must be minimum eight characters, at least one
                  uppercase letter, one lowercase letter, one number and one
                  special character.
                </span>
              ) : (
                <span className={styles.cong}>Good Password</span>
              )}
            </div>
            <div className={styles.buttons}>
              <button type="submit" className={styles.button}>
                Sign up
              </button>
              <span className={styles.button} onClick={handleSignupWithGoogle}>
                Sign Up with <FcGoogle />
              </span>
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
