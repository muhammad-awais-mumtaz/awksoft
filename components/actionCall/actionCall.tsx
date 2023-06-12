import Link from "next/link";
import styles from "./actionCall.module.css";
import EmbVideo from "../embVideo/embVideo";

interface IProps {
  text: string;
  heading: string;
  linkOfVideo: string;
  titleOfVideo: string;
  linkOfButtonRedirect: string;
  buttonText: string;
}

export default function ActionCall({
  text,
  heading,
  linkOfVideo,
  titleOfVideo,
  linkOfButtonRedirect,
  buttonText,
}: IProps) {
  return (
    <>
      <div className={styles.cont}>
        <h1>{heading}</h1>
        <div className={styles.video}>
          <EmbVideo videoLink={linkOfVideo} videoTitle={titleOfVideo} />
        </div>
        <p>{text}</p>
        <div className={styles.btn}>
          <Link href={linkOfButtonRedirect}>{buttonText}</Link>
        </div>
      </div>
    </>
  );
}
