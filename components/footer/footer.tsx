import Link from "next/link";
import styles from "./footer.module.css";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className={styles.cont}>
        <section className={styles.linksCont}>
          <Link href={"https://twitter.com/_awksoft"} target="_blank">
            twitter <BsTwitter />
          </Link>
          <Link
            href={"https://web.facebook.com/people/Awksoft/100094570092780/"}
            target="_blank"
          >
            facebook <FaFacebook />
          </Link>
        </section>
        <section className={styles.refCont}>
          <div>
            <AiOutlineCopyright /> at Awksoft
          </div>
        </section>
      </div>
    </>
  );
}
