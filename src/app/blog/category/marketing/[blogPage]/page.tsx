import styles from "./blogPage.module.css";
import { Metadata } from "next";
import { getDataFromCollection } from "../../../../../../utils/firebase/firestore/databaseManip";
import DynamicBlogPostPage from "../../../../../../components/dynamicBlogPostPage/dynamicBlogPostPage";

interface pageProps {
  params: { blogPage: string };
  searchParams: { id: string };
}

export async function generateMetadata({
  params,
  searchParams,
}: pageProps): Promise<Metadata> {
  let { id } = searchParams;
  const blogPost = (await getDataFromCollection("blogsPosts")).find(
    (blog) => blog.id === id
  );
  return {
    title: blogPost?.title,
    description: blogPost?.blogDescription,
    metadataBase: new URL(
      `https://awksoft.com/blog/category/${blogPost.category
        .toLowerCase()
        .replace(/\s+/g, "-")}/${blogPost.url.replace(/\s+/g, "+")}?id=${
        blogPost.id
      }`
    ),
    openGraph: {
      type: "article",
      url: `https://awksoft.com/blog/category/${blogPost.category
        .toLowerCase()
        .replace(/\s+/g, "-")}/${blogPost.url.replace(/\s+/g, "+")}?id=${
        blogPost.id
      }`,
      title: blogPost.title,
      description:
        "Awksoft.com is a website where you will find best web development teams, design teams and marketing teams.",
      siteName: "Awksoft",
      images: [
        {
          url: blogPost.featuredImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@awksoft.com",
      creator: "@_awksoft",
      images: blogPost.featuredImage,
    },
  };
}

export default function Page({ params, searchParams }: pageProps) {
  let { blogPage } = params;
  let { id } = searchParams;

  return (
    <>
      <div className={styles.cont}>
        <DynamicBlogPostPage id={id} />
      </div>
    </>
  );
}
