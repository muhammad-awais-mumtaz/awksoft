import { useState } from "react";
import styles from "./skillsForm.module.css";

interface SkillFormProps {
  onSubmit: (skills: string[]) => void;
}

const SkillForm: React.FC<SkillFormProps> = ({ onSubmit }) => {
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewSkill(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  return (
    <form className={styles.formCont} onSubmit={handleSubmit}>
      <div>
        <label
          className={`${styles.block} ${styles.label}`}
          htmlFor="skillInput"
        >
          Enter a skill: We will verify them by a video 📽️ call 📞.
        </label>
        <input
          className={`${styles.block} ${styles.input}`}
          type="text"
          id="skillInput"
          value={newSkill}
          onChange={handleInputChange}
        />
        <div className={styles.buttons}>
          <button className={styles.button} type="submit">
            Add Skill
          </button>
        </div>
      </div>
      <div>
        <h3>Skills List:</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default SkillForm;
