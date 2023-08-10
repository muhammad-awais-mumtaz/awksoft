"use client";
import { useEffect, useState } from "react";
import { getDataFromCollection } from "../../utils/firebase/firestore/databaseManip";
import styles from "./dynamicBlogPostPage.module.css";
import Image from "next/image";

interface props {
  id: string;
}

export default function DynamicBlogPostPage({ id }: props) {
  const [blogPost, setBlogPost] = useState<any>(null);
  const [writer, setWriter] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDataFromCollection("blogsPosts");
        const foundBlogPost = data.find((blog) => blog.id === id);

        const userData = await getDataFromCollection("serviceProvider");
        const userFound = userData.find(
          (singleUser) => singleUser.employeeId === foundBlogPost.employeeId
        );
        if (foundBlogPost && userFound) {
          setBlogPost(foundBlogPost);
          setWriter(userFound);
        } else {
          // Handle the case where the blog post with the specified id is not found.
          console.warn(`Blog post with id '${id}' not found.`);
        }
      } catch (error) {
        // Handle error if any
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {blogPost && (
        <>
          <section className={styles.dateAndCate}>
            <time>{blogPost.uploadDate}</time>
            {" / "}
            <span>
              <h4>{blogPost.category}</h4>
            </span>
          </section>
          <section className={styles.headingCont}>
            <h1 className={styles.heading}>{blogPost.title}</h1>
          </section>
          <section className={styles.uploaderCont}>
            <div>
              {writer.profileImage && (
                <Image
                  src={writer.profileImage}
                  height={60}
                  width={60}
                  alt={"profile image of blog writer"}
                />
              )}
            </div>
            <div>
              <h4 className={styles.userName}>{writer.name}</h4>
            </div>
          </section>
          <section
            className={styles.blogBody}
            dangerouslySetInnerHTML={{ __html: blogPost.blogHtml }}
          ></section>
        </>
      )}
    </>
  );
}
