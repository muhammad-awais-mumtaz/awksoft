"use client";
import { useEffect, useState } from "react";
import styles from "./skillsForm.module.css";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useAuth } from "../../utils/firebase/auth/useAuth";
import {
  getDataFromCollection,
  updateDataToCollection,
} from "../../utils/firebase/firestore/databaseManip";
import { useRouter } from "next/navigation";

const SkillForm = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState<string>("");
  const [serviceProvidersData, setServiceProvidersData] = useState<any[]>([]);

  const user = useAuth();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      let data = await getDataFromCollection("serviceProvider");
      setServiceProvidersData(data);
    };

    fetchData();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewSkill(event.target.value);
  };

  const handleRemoveSkill = (index: number) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    async function updateServiceProvider() {
      serviceProvidersData.map((singleProvider) => {
        if (user?.uid === singleProvider.employeeId) {
          updateDataToCollection("serviceProvider", singleProvider.id, {
            skills,
          });
          router.push("/admin");
        }
      });
    }

    updateServiceProvider();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="skillInput"
          className={`${styles.block} ${styles.label}`}
        >
          Enter a skill: We will verify your skills through a video 📽️ call 📞.
        </label>
        <input
          className={`${styles.block} ${styles.input}`}
          type="text"
          id="skillInput"
          value={newSkill}
          onChange={handleInputChange}
        />
        <div className={styles.buttons}>
          <span
            className={styles.button}
            onClick={(event) => {
              event.preventDefault();
              if (newSkill.trim() !== "") {
                setSkills([...skills, newSkill]);
                setNewSkill("");
              }
            }}
          >
            <IoMdAddCircleOutline />
          </span>
        </div>
      </div>
      <div>
        <h2>Skills List:</h2>
        <ul className={styles.block}>
          {skills.map((skill, index) => (
            <li key={index}>
              <h3>{skill}</h3>
              <div className={styles.buttons}>
                <span
                  className={styles.btn}
                  onClick={() => handleRemoveSkill(index)}
                >
                  <AiOutlineMinusCircle />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${styles.buttons} ${styles.submitBtnCont}`}>
        <button
          type="submit"
          className={`${styles.button} ${styles.submitBtn}`}
        >
          <h4> Submit</h4>
        </button>
      </div>
    </form>
  );
};

export default SkillForm;
