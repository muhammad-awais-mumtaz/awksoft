import Link from "next/link";
import styles from "./blogCard.module.css";

import Image from "next/image";

interface blogs {
  uid: string;
  image: string;
  uploadDate: string;
  title: string;
  url: string;
  category: string;
}

export default function BlogCard({
  uid,
  image,
  uploadDate,
  title,
  url,
  category,
}: blogs) {
  return (
    <div className={styles.card}>
      <Link
        href={`/blog/category/${category
          .toLowerCase()
          .replace(/\s+/g, "-")}/${url.replace(/\s+/g, "+")}?id=${uid}`}
      >
        <section className={styles.image}>
          <Image
            height={100}
            width={200}
            src={image}
            alt={"Thumbnail of blog titled " + title}
            priority
          />
        </section>
        <section className={styles.text}>
          <p>{uploadDate}</p>
          <p>{category}</p>

          <h4>{title}</h4>
        </section>
      </Link>
    </div>
  );
}
