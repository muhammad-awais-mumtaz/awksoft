import Link from "next/link";
import styles from "./actionCall.module.css";

export default function ActionCall() {
  return (
    <>
      <div className={styles.cont}>
        <p>
          Please schedule a meeting at your earliest convenience to engage in a
          productive discussion regarding your project, ensuring no time is
          wasted.
        </p>
        <div className={styles.btn}>
          <Link href="/">Book a meeting now</Link>
        </div>
      </div>
    </>
  );
}
