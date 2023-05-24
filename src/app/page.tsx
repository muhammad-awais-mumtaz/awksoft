import styles from "./page.module.css";
import Hero from "../../components/hero/hero";
import Properties from "../../components/properties/properties";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Properties />
    </main>
  );
}
