"use client";

import { useState } from "react";
import styles from "./compleatProfile.module.css";
import SkillForm from "../../../../../../components/skillsForm/skillsForm";

export default function CompleatProfile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitSkills = (skills: string[]) => {
    console.log("Submitted skills:", skills);
    // You can do further processing with the skills array here
  };

  return (
    <div className={styles.cont}>
      <section className={styles.formCont}>
        <h1>Enter Your Skills</h1>
        <SkillForm onSubmit={handleSubmitSkills} />
      </section>
    </div>
  );
}
