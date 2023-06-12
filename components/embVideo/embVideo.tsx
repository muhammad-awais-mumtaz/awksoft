import styles from "./embVideo.module.css";

interface IProps {
  videoLink: string;
  videoTitle: string;
}

export default function EmbVideo({ videoLink, videoTitle }: IProps) {
  return (
    <>
      <div className={styles.cont}>
        <iframe
          // width="560"
          // height="315"
          src={videoLink}
          title={videoTitle}
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
