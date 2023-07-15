"use client";

import styles from "./user.module.css";
import Image from "next/image";
import Link from "next/link";

import { useAuth } from "../../../../../utils/firebase/auth/useAuth";
import { auth } from "../../../../../utils/firebase/initFirebase";

import { BsCheckCircleFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineLogout } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface pageProps {
  params: { blogPage: string };
  searchParams: { id: string };
}

export default function Page({ params, searchParams }: pageProps) {
  const user = useAuth();
  const router = useRouter();

  if (user) {
    return (
      <div className={styles.cont}>
        <div className={styles.innerDiv}>
          <section className={styles.userPro}>
            <div className={styles.proImg}>
              {user.photoURL && (
                <Image
                  className={styles.img}
                  src={user.photoURL}
                  height={70}
                  width={70}
                  alt={"image of user named " + user.displayName}
                />
              )}
            </div>
            <div className={styles.userDetail}>
              <h3>{user.displayName} </h3>
              <p>
                {user.email}{" "}
                {user.emailVerified ? <BsCheckCircleFill /> : <RxCross2 />}
              </p>
              {user.phoneNumber && <p>{user.phoneNumber}</p>}
              <p className={styles.cong}>Service Provider</p>
            </div>
          </section>
          <section className={styles.buttons}>
            <span className={styles.btn}>
              {user.displayName && (
                <Link
                  href={`${user.displayName
                    .toLowerCase()
                    .replace(/\s+/g, "-")}/editProfile`}
                >
                  Edit Profile <CgProfile />
                </Link>
              )}
            </span>
            <span
              className={styles.btn}
              onClick={() => {
                auth.signOut();
                router.push("/logIn");
              }}
            >
              Log out <AiOutlineLogout />
            </span>
          </section>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className={styles.cont}>
          Please <Link href={"/logIn"}> log in </Link> to access this content.
        </div>
      </>
    );
  }
}
