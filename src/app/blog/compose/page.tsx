import TinyMCEComp from "../../../../components/tinyMCEComp/tinyMCEComp";

import styles from "./compose.module.css";
export default function Compose() {
  return (
    <>
      <div className={styles.editorCont}>
        <TinyMCEComp />
      </div>
    </>
  );
}
