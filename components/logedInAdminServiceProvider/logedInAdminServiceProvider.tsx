import styles from "./logedInAdmin.module.css";
import { useAuth } from "../../utils/firebase/auth/useAuth";
import Link from "next/link";
import Image from "next/image";

import { BsCheckCircleFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { ImBlog } from "react-icons/im";

const skills = [
  "Web development",
  "Marketing",
  "design",
  "Web development",
  "Marketing",
  "design",
  "Web development",
  "Marketing",
  "design",
  "Web development",
  "Marketing",
  "design",
  "cooking",
  "design",
  "cooking",
  "design",
  "cooking",
];

const projectsGoingOn = [
  "Web development",
  "Marketing",
  "Web development",
  "Marketing",
  "Web development",
  "Marketing",
  "Web development",
  "Marketing",
  "design",
  "cooking",
  "design",
  "cooking",
  "design",
  "cooking",
];
const projectsDone = [
  "Web development",
  "Marketing",
  "design",
  "Web development",
  "Marketing",
  "design",
  "Web development",
  "Marketing",
  "design",
  "cooking",
  "design",
  "cooking",
  "design",
  "cooking",
  "design",
  "cooking",
  "design",
  "cooking",
];
const blogs = [
  "Web development",
  "Marketing",
  "design",
  "Web development",
  "Marketing",
  "design",
  "Web development",
  "Marketing",
  "design",
  "cooking",
  "design",
  "cooking",
  "design",
  "cooking",
  "design",
  "cooking",
  "design",
  "cooking",
];

export default function LogedInAdminServiceProvider() {
  const user = useAuth();
  if (user) {
    return (
      <div className={styles.cont}>
        <section className={styles.profileDetails}>
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
          <div className={styles.userDetails}>
            <h3>{user.displayName} </h3>
            <p>
              {user.email}{" "}
              {user.emailVerified ? <BsCheckCircleFill /> : <RxCross2 />}
            </p>
          </div>
        </section>

        <section className={styles.skills}>
          <h3>Skills</h3>
          <div>
            {skills.map((skill, i) => {
              return <span key={i}>{skill}, </span>;
            })}
          </div>
        </section>
        <section className={styles.blogs}>
          <h3>Composed blogs</h3>
          {blogs.map((blog, i) => {
            return <span key={i}>{blog}, </span>;
          })}
        </section>
        <section className={styles.buttons}>
          <span className={styles.btn}>
            {user.displayName && (
              <Link
                href={`user/serviceProvider/${user.displayName
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                Profile <CgProfile />
              </Link>
            )}
          </span>
          <span className={styles.btn}>
            <Link href={"/blog/compose"}>
              Compose blog <ImBlog />
            </Link>
          </span>
        </section>
      </div>
    );
  } else {
    return <></>;
  }
}
