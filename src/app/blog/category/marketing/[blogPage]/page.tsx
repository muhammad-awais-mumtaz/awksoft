import styles from "./blogPage.module.css";

import { blogsArray } from "../../../../../../utils/blogs";
import { serviceProvider } from "../../../../../../utils/serviceProvider";

interface pageProps {
  params: { blogPage: string };
  searchParams: { id: string };
}

interface blogPost {
  id: string;
  uid: string;
  featuredImage: string;
  altText: string;
  uploadDate: string;
  title: string;
  url: string;
  category: string;
  images: string[];
  blogHtml: string;
  uploader: serviceProvider;
}

export default function Page({ params, searchParams }: pageProps) {
  let { blogPage } = params;
  let { id } = searchParams;

  const blogPost = blogsArray.find((blog) => blog.uid === id);

  return (
    <>
      <div className={styles.cont}>
        <section className={styles.mainImgTitle}>{blogPost?.title}</section>
      </div>
    </>
  );
}
