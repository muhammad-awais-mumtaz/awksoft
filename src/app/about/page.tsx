import { Metadata } from "next";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "Awksoft - About",
  description:
    "About page of Awksoft the service providing company Reduce time and costs with our tailored teams for development, marketing, and design challenges.",
};

export default function About() {
  return (
    <div className={styles.cont}>
      <div className={styles.photo}>
        <div className={styles.imgCont}></div>
      </div>
      <h1 className={styles.heading}>About Awksoft</h1>
      <p className={styles.para}>
        Hello! We're Awksoft. We have special teams that can make websites,
        create nice designs, and help tell others about your business. We're in
        Islamabad, Pakistan. We use new tricks to make your business even
        better.
      </p>
    </div>
  );
}
