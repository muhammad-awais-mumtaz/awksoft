import styles from "./hero.module.css";

import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className={styles.main}>
        <section className={styles.details}>
          <h1>
            Custom Teams for Your Project: Streamline Your Workflow and Save
            Costs!
          </h1>
          <p>
            At our company, we offer tailored teams to suit your specific
            project needs. Whether you are experiencing challenges with
            development, marketing, or design, our custom teams are available to
            reduce the time and costs associated with your project. Best for
            startups😀.
          </p>
        </section>
        <section className={styles.illustration}>
          <div className={styles.img_cont}>
            <Image
              className={styles.hero_image}
              src="/hero/img.png"
              alt="Image of a team working on a computer. Discussing something with each other."
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </section>
      </div>
    </>
  );
}
