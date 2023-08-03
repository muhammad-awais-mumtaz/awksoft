import styles from "./blogPage.module.css";
import { getDataFromCollection } from "../../../../../../utils/firebase/firestore/databaseManip";
import { Metadata } from "next";
import WebDevClientComp from "../../../../../../components/webDevClientComp/webDevClientComp";

interface pageProps {
  params: { blogPage: string };
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
    title: blogPost?.title,
    description: blogPost?.blogDescription,
  };
}

export default function Page({ params, searchParams }: pageProps) {
  let { blogPage } = params;
  let { id } = searchParams;

  return (
    <>
      <div className={styles.cont}>
        <WebDevClientComp id={id} />
      </div>
    </>
  );
}
