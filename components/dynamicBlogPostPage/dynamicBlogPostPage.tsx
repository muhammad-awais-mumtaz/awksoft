"use client";
import { useEffect, useState } from "react";
import { getDataFromCollection } from "../../utils/firebase/firestore/databaseManip";
import styles from "./dynamicBlogPostPage.module.css";

interface props {
  id: string;
}

export default function DynamicBlogPostPage({ id }: props) {
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
          <section className={styles.uploader}></section>
          <section
            className={styles.blogBody}
            dangerouslySetInnerHTML={{ __html: blogPost.blogHtml }}
          ></section>
        </>
      )}
    </>
  );
}
