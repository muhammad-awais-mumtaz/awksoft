import styles from "./logedInAdmin.module.css";
import { useAuth } from "../../utils/firebase/auth/useAuth";
import Link from "next/link";
import Image from "next/image";

import { BsCheckCircleFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { useEffect, useState } from "react";
import {
  deleteDocument,
  getDataFromCollection,
} from "../../utils/firebase/firestore/databaseManip";
import BlogCard from "../blogCard/blogCard";
import { useRouter } from "next/navigation";

export default function LogedInAdminServiceProvider() {
  const user = useAuth();
  const router = useRouter();

  const [serviceProvidersData, setServiceProvidersData] = useState<any[]>([]);
  const [blogsPosts, setBlogsPosts] = useState<any[]>([]);
  const [blogsWrittenBy, setBlogsWrittenBy] = useState<any[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [skillsVerified, setSkillsVerified] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const serviceProvidersData = await getDataFromCollection(
        "serviceProvider"
      );
      setServiceProvidersData(serviceProvidersData);

      const blogsPosts = await getDataFromCollection("blogsPosts");
      setBlogsPosts(blogsPosts);

      const currentUserUID = user?.uid;
      const currentUserData = serviceProvidersData.find(
        (singleData) => singleData.employeeId === currentUserUID
      );

      if (currentUserData) {
        setSkills(currentUserData.skills);
        setSkillsVerified(currentUserData.skillsVerified);
      }

      const blogsWrittenByCurrentUser = blogsPosts.filter(
        (post) => post.employeeId === currentUserUID
      );
      setBlogsWrittenBy(blogsWrittenByCurrentUser);
    };

    fetchData();
  }, [user?.uid]);

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
          <h3>Composed blogs:</h3>
          {blogsWrittenBy.length === 0 && (
            <h1 className={`${styles.warn} ${styles.blogWarning}`}>
              No! blog posts you have written
            </h1>
          )}
          {blogsWrittenBy.map((blog, i) => {
            return (
              <div key={i} className={styles.blogCardCont}>
                <BlogCard
                  uid={blog.id}
                  image={blog.featuredImage}
                  uploadDate={blog.uploadDate}
                  title={blog.title}
                  url={blog.url}
                  category={blog.category}
                />
                <div className={styles.buttons}>
                  <Link
                    className={styles.btn}
                    href={`/blog/edit/${blog.url
                      .toLowerCase()
                      .replace(/\s+/g, "-")}?id=${blog.id}`}
                  >
                    edit
                  </Link>
                  <span
                    className={styles.btnWarn}
                    onClick={() => {
                      deleteDocument("blogsPosts", blog.id).then(() => {
                        router.refresh();
                      });
                    }}
                  >
                    Delete blog
                  </span>
                </div>
                <div className={styles.hrCont}>
                  <hr className={styles.hrLine} />
                </div>
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
