import styles from "./logedInAdmin.module.css";
import { useAuth } from "../../utils/firebase/auth/useAuth";
import Link from "next/link";
import Image from "next/image";

import { BsCheckCircleFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { useEffect, useState } from "react";
import { getDataFromCollection } from "../../utils/firebase/firestore/databaseManip";

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
  const [serviceProvidersData, setServiceProvidersData] = useState<any[]>([]);
  const [blogsPosts, setBlogsPosts] = useState<any[]>([]);
  const [blogsWrittenBy, setBlogsWrittenBy] = useState<any[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [skillsVerified, serSkillsVerified] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getDataFromCollection("serviceProvider");
      setServiceProvidersData(data);
      serviceProvidersData.map((singleData) => {
        if (singleData.employeeId === user?.uid) {
          setSkills(singleData.skills);
          serSkillsVerified(singleData.skillsVerified);
        }
      });

      getDataFromCollection("blogsPosts").then((data) => {
        setBlogsPosts(data);
      });
      setBlogsWrittenBy(
        blogsPosts.filter((post) => {
          return post.employeeId === user?.uid;
        })
      );
    };

    fetchData();
  }, [serviceProvidersData, skills, user?.emailVerified]);

  if (user) {
    return (
      <div className={styles.cont}>
        {!skillsVerified && (
          <div className={styles.topHeadCont}>
            <h2 className={styles.warn}>
              Your skills are not verified you can't compose a blog.
            </h2>
            We will verify them by a video 📽️ call 📞.
          </div>
        )}
        <section className={styles.profileDetails}>
          <div className={styles.proImg}>
            {user.photoURL ? (
              <Image
                className={styles.img}
                src={user.photoURL}
                height={70}
                width={70}
                alt={"image of user named " + user.displayName}
              />
            ) : (
              <Image
                className={styles.img}
                src="/proAvatar/proAvatar.png"
                height={70}
                width={70}
                alt={"image of user named " + user.displayName}
              />
            )}
          </div>
          <div className={styles.userDetails}>
            {user.displayName ? (
              <h3>{user.displayName} </h3>
            ) : (
              <h3>No user name please compleat your profile</h3>
            )}
            <div>
              <p className={styles.email}> {user.email} </p>
              {user.emailVerified ? (
                <BsCheckCircleFill />
              ) : (
                <p className={styles.warn}>
                  <RxCross2 /> Your Email is not verified check your email
                  please
                </p>
              )}
            </div>
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
          <h3>
            Composed blogs: You can edit them by clicking on the links given
            below!
          </h3>
          {blogsWrittenBy.map((blog, i) => {
            return (
              <div key={i}>
                <Link
                  href={`/blog/edit/${blog.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}?id=${blog.id}`}
                >
                  <span>{blog.title}, </span>
                </Link>
              </div>
            );
          })}
        </section>
        <section className={styles.buttons}>
          {user.displayName && user.emailVerified && skills.length !== 0 ? (
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
          ) : (
            <span className={styles.btn}>
              <Link href={`user/serviceProvider/compleatProfile`}>
                <span className={styles.warn}>
                  Compleat profile <CgProfile />
                </span>
              </Link>
            </span>
          )}
          <span
            className={`${styles.btn} ${
              skills.length === 0 ||
              !user.displayName ||
              !user.emailVerified ||
              !skillsVerified
                ? styles.disabled
                : ""
            }`}
          >
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
