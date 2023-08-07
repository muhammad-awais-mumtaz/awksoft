import { Metadata } from "next";
import BlogEdit from "../../../../../components/blogEdit/blogEdit";
import styles from "./blogTitle.module.css";
import { getDataFromCollection } from "../../../../../utils/firebase/firestore/databaseManip";

interface pageProps {
  params: { blogTitle: string };
  searchParams: { id: string };
}

export async function generateMetadata({
  params,
  searchParams,
}: pageProps): Promise<Metadata> {
  let { id } = searchParams;
  const blogsArray = await getDataFromCollection("blogsPosts");
  const blogPost = blogsArray.find((blog) => blog.id === id);
  return {
    title: "Edit blog | " + blogPost?.title,
    description: blogPost?.blogDescription,
  };
}

export default function Page({ params, searchParams }: pageProps) {
  let { blogTitle } = params;
  let { id } = searchParams;

  return (
    <>
      <div className={styles.cont}>
        <BlogEdit id={id} />
      </div>
    </>
  );
}
