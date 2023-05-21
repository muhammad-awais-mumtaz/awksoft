import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.cont}>
        <section className={styles.logo}>
          <h1>Awksoft</h1>
        </section>
        <section className={styles.nevLinks}>
          <div>Home</div>
          <div>About</div>
          <div>Blog</div>
          <div>Sign Up</div>
        </section>
      </div>
    </>
  );
}
