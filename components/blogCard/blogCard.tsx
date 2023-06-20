import Link from "next/link";
import styles from "./blogCard.module.css";

import Image from "next/image";

interface blogs {
  uid: string;
  image: string;
  altText: string;
  uploadDate: string;
  title: string;
  url: string;
  category: string;
}

export default function BlogCard({
  uid,
  image,
  altText,
  uploadDate,
  title,
  url,
  category,
}: blogs) {
  return (
    <div className={styles.card}>
      <Link href={`/blog/${url.replace(/\s+/g, "+")}?id=${uid}`}>
        <section className={styles.image}>
          <Image
            height={100}
            width={200}
            src={image}
            alt={altText + title}
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
