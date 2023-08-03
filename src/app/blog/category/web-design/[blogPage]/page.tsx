import styles from "./blogPage.module.css";
import Image from "next/image";
import { Metadata } from "next";
import { blogsArray } from "../../../../../../utils/blogs";

interface pageProps {
  params: { blogPage: string };
  searchParams: { id: string };
}

export async function generateMetadata({
  params,
  searchParams,
}: pageProps): Promise<Metadata> {
  let { id } = searchParams;
  const blogPost = blogsArray.find((blog) => blog.uid === id);
  return {
    title: blogPost?.title,
    description: blogPost?.blogDescription,
  };
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
