import styles from "./embVideo.module.css";

interface IProps {
  videoLink: string;
  videoTitle: string;
}

export default function EmbVideo({ videoLink, videoTitle }: IProps) {
  return (
    <>
      <div className={styles.cont}>
        <iframe src={videoLink} title={videoTitle} allowFullScreen></iframe>
      </div>
    </>
  );
}
