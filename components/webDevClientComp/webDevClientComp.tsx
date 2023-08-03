"use client";
import { useEffect, useState } from "react";
import { getDataFromCollection } from "../../utils/firebase/firestore/databaseManip";
import styles from "./webDevClientComp.module.css";
import Image from "next/image";

interface props {
  id: string;
}

export default function WebDevClientComp({ id }: props) {
  const [blogsArray, setBlogsArray] = useState<any[]>([]);
  const [blogPost, setBlogPost] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      getDataFromCollection("blogsPosts").then((data) => {
        setBlogsArray(data);
        setBlogPost(data.find((blog) => blog.id === id));
      });
    };

    fetchData();
  }, []);

  return (
    <>
      {blogPost && (
        <>
          <section className={styles.mainImgTitle}>
            <div className={styles.blogHading}>
              <h1 className={styles.heading}>{blogPost.title}</h1>
            </div>
            <div className={styles.featuredImg}>
              <Image
                src={blogPost.featuredImage}
                alt={`featured image of blog titled ${blogPost.title}`}
                fill
                sizes="(max-width: 800px) 100vw, 700px"
                priority
              />
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
