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
      try {
        const data = await getDataFromCollection("blogsPosts");
        setBlogsArray(data);
        const foundBlogPost = data.find((blog) => blog.id === id);
        if (foundBlogPost) {
          setBlogPost(foundBlogPost);
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
