import styles from "./blogCard.module.css";

import Image from "next/image";

interface blogs {
  image: string;
  altText: string;
  uploadDate: string;
  title: string;
  category: string;
}

export default function BlogCard({
  image,
  altText,
  uploadDate,
  title,
  category,
}: blogs) {
  return (
    <div className={styles.card}>
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
    </div>
  );
}
