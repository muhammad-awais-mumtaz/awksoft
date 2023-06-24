import Link from "next/link";
import styles from "./blog.module.css";

export default function BlogHome() {
  return (
    <>
      <div className={styles.cont}>
        <section className={`${styles.webDevCont} ${styles.blogCategory}`}>
          <div className={styles.reaper}>
            <Link href="/blog/category/web-development">
              Web development blog
            </Link>
          </div>
        </section>
        <section className={`${styles.webDesignCont} ${styles.blogCategory}`}>
          <div className={styles.reaper}>
            <Link href="/blog/category/web-design">Web design blog</Link>
          </div>
        </section>
        <section className={`${styles.marketing} ${styles.blogCategory}`}>
          <div className={styles.reaper}>
            <Link href="/blog/category/marketing">Marketing Blog</Link>
          </div>
        </section>
      </div>
    </>
  );
}
