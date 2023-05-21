import styles from "./page.module.css";
import Hero from "../../components/hero/hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}
