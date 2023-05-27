import styles from "./page.module.css";
import Hero from "../../components/hero/hero";
import Properties from "../../components/properties/properties";
import ActionCall from "../../components/actionCall/actionCall";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Properties />
      <ActionCall />
    </main>
  );
}
