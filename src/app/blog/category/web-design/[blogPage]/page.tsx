import styles from "./blogPage.module.css";
import { blogsArray } from "../../../../../../utils/blogs";
import Image from "next/image";

interface pageProps {
  params: { blogPage: string };
  searchParams: { id: string };
}

export default function Page({ params, searchParams }: pageProps) {
  let { blogPage } = params;
  let { id } = searchParams;

  const blogPost = blogsArray.find((blog) => blog.uid === id);

  return (
    <>
      <div className={styles.cont}>
        {blogPost && (
          <>
            <section className={styles.mainImgTitle}>
              <div className={styles.blogHading}>
                <h1>{blogPost.title}</h1>
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
      </div>
    </>
  );
}
