"use client";
import styles from "./signUp.module.css";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import { BiShowAlt, BiHide } from "react-icons/bi";
import signUp from "../../../utils/firebase/auth/signUp";
import { signUserWithGoogleProvider } from "../../../utils/firebase/auth/signUpWithGoogle";
import { updateUserNameOrPhoto } from "../../../utils/firebase/updateUser/updateUser";
import { uploadDataToCollection } from "../../../utils/firebase/firestore/databaseManip";
import { serviceProvider } from "../../../utils/serviceProvider";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const router = useRouter();

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      console.log(error.code);
      if (error.code === "auth/email-already-in-use") {
        alert("Account already in use. Log in to your account.");
        router.push("/logIn");
      } else {
        alert(
          "Something went wrong. Check your internet or refresh the page. The Error is " +
            error.code
        );
      }
    }

    if (result) {
      const user = result.user;
      router.push("user/serviceProvider/compleatProfile");
      updateUserNameOrPhoto(user, name, "").then(() => {
        const userData: serviceProvider = {
          employeeId: user.uid,
          name: user.displayName,
          skills: [],
          skillsVerified: false,
          profileImage: user.photoURL,
        };

        uploadDataToCollection("serviceProvider", userData);
      });
    }
  };

  const handleSignUpWithGoogle = async () => {
    const { result, error } = await signUserWithGoogleProvider();
    if (error) {
      if (error.code === "auth/popup-closed-by-user") {
        console.log(error.code);
        setShowError(!showError);
      } else {
        alert(error.code);
      }
    } else {
      let user = result?.user;
      if (user) {
        router.push("user/serviceProvider/compleatProfile");
        const userData: serviceProvider = {
          employeeId: user.uid,
          name: user.displayName,
          skills: [],
          skillsVerified: false,
          profileImage: user.photoURL,
        };

        uploadDataToCollection("serviceProvider", userData);
      }
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
              <label className={styles.block} htmlFor="name">
                Name
              </label>
              <input
                className={`${styles.block} ${styles.input}`}
                type="text"
                id="name"
                name="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
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
              <span className={styles.button} onClick={handleSignUpWithGoogle}>
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
