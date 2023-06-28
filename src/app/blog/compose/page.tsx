import { Metadata } from "next";
import TinyMCEComp from "../../../../components/tinyMCEComp/tinyMCEComp";

export const metadata: Metadata = {
  title: "Awksoft - Blog compose",
  description: "This is page for composing the blog",
};

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
