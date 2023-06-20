import styles from "./page.module.css";
import Hero from "../../components/hero/hero";
import Properties from "../../components/properties/properties";
import ActionCall from "../../components/actionCall/actionCall";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta http-equiv="Permissions-Policy" content="interest-cohort=()" />
      </Head>
      <main className={styles.main}>
        <Hero />
        <ActionCall
          heading="If you have some idea"
          text="If you have an idea for a project and would like to discuss it further, click the 'Let's Go' button below. Please share some information about your project and book a meeting with us. We look forward to exploring your ideas in detail."
          linkOfVideo="https://www.youtube.com/embed/KMWx15H0SFs"
          titleOfVideo="This video is introduction to our web site awksoft.com. It also tell what to do next. How can you hire a team with us."
          linkOfButtonRedirect="/"
          buttonText="lets go!"
        />
        <Properties />
        <ActionCall
          heading="If you know nothing"
          text="If you would like to schedule a meeting with us to discuss your project, please click the 'Book a Meeting Now' button below. Even if you are not familiar with the details yet, we are here to help. Simply book a meeting, and we will be happy to have a conversation with you and assist you in any way we can."
          linkOfVideo="https://www.youtube.com/embed/P5ytshZQo2U"
          titleOfVideo="This video is about , 'what you can do if you know nothing'. This video tell you what you can do."
          linkOfButtonRedirect="/"
          buttonText="Book a meeting now"
        />
      </main>
    </>
  );
}
