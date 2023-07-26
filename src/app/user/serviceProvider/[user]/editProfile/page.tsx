"use client";
import { ChangeEvent, useState } from "react";
import styles from "./editProfile.module.css";
import { useAuth } from "../../../../../../utils/firebase/auth/useAuth";
import { updateUserNameAndPhoto } from "../../../../../../utils/firebase/updateUser/updateUser";
import { uploadImage } from "../../../../../../utils/firebase/uploadImage/uploadImage";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function EditProfile() {
  const user = useAuth();
  const router = useRouter();

  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [userName, setUserName] = useState("");
  const [newProfileLink, setNewProfileLink] = useState("");

  const handleImageSelection = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfilePic(file);
      try {
        const downloadURL = await uploadImage(
          "user/serviceProvider/profile",
          file
        );
        console.log("Image uploaded successfully. Download URL:", downloadURL);
        setProfilePic(null);
        setNewProfileLink(downloadURL);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = async () => {
    await updateUserNameAndPhoto(user, userName, newProfileLink);
    if(user?.displayName){

      router.push(
        `/user/serviceProvider/${user.displayName
          .toLowerCase()
          .replace(/\s+/g, "-")}`
      );
    }
  };

  return (
    <div className={styles.cont}>
      <div className={styles.warper}>
        <section className={styles.userNameAndProfileUpdate}>
          <h2>Previous Name and profile</h2>
          <p>{user?.displayName}</p>
          {user?.photoURL && (
            <div>
              <Image
                className={styles.proImg}
                src={user.photoURL}
                height={100}
                width={100}
                alt={"Profile image of " + user.displayName}
                priority
              />
            </div>
          )}
          <form className={styles.form}>
            <h2>New Name and Profile</h2>
            <div>
              <label className={styles.block} htmlFor="profilePic">
                New Profile picture
              </label>
              {newProfileLink ? (
                <div>
                  <Image
                    className={styles.proImg}
                    src={newProfileLink}
                    height={100}
                    width={100}
                    alt={"Profile image of " + user?.displayName}
                    priority
                  />
                </div>
              ):(
                <div>
                  <Image
                    className={styles.proImg}
                    src="/proAvatar/proAvatar.png"
                    height={100}
                    width={100}
                    alt={"Profile image of " + user?.displayName}
                    priority
                  />
                </div>
              )}
              <input
                className={`${styles.block} ${styles.input}`}
                type="file"
                id="profilePic"
                name="profilePic"
                accept="image/*"
                onChange={handleImageSelection}
              />
            </div>
            <div>
              <label className={styles.block} htmlFor="newProfileLik">
                New Profile Link
              </label>
              <input
                className={`${styles.block} ${styles.input}`}
                type="text"
                id="newProfileLik"
                name="newProfileLik"
                readOnly
                value={newProfileLink}
                onChange={(event) => setNewProfileLink(event.target.value)}
              />
            </div>
            <div>
              <label className={styles.block} htmlFor="email">
                New User Name
              </label>
              <input
                className={`${styles.block} ${styles.input}`}
                type="userName"
                id="userName"
                name="userName"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>
            <div className={styles.buttons}>
              <span className={styles.btn} onClick={handleSubmit}>
                change my name or Profile pic
              </span>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
