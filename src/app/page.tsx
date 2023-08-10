import styles from "./page.module.css";
import Hero from "../../components/hero/hero";
import Properties from "../../components/properties/properties";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Hero />
        <div className={styles.callToActionCont}>
          <h1>If you have an idea: Lets have a meeting!</h1>
          <div className={styles.photo}>
            <div className={styles.imgCont}></div>
          </div>
          <p>
            If you have an idea for a project and would like to discuss it
            further, click the 'Let's Go' button below. We look forward to
            exploring your ideas in detail. Lets make them reality to gather.
          </p>
          <div className={styles.btn}>
            <Link href={"https://calendly.com/awksofts/15min"} target="_blank">
              "lets go!"
            </Link>
          </div>
        </div>
        <Properties />
        <div className={styles.callToActionCont}>
          <h1>What are you waiting for? Go book a meeting.</h1>
          <div className={styles.photo2}>
            <div className={styles.imgCont2}></div>
          </div>
          <div className={styles.btn}>
            <Link href={"https://calendly.com/awksofts/15min"} target="_blank">
              Book a meeting now
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
