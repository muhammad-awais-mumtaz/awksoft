import styles from "./properties.module.css";

import Image from "next/image";

let properties: {
  id: number;
  title: string;
  addressOfImage: string;
  text: string;
}[] = [
  {
    id: 1,
    title: "Team",
    addressOfImage: "/properties/team/team.png",
    text: "We guarantee the provision of a customized, expertly trained team 👩🏻‍💻👨🏻‍💻 that perfectly aligns with your project, whether it is a startup or any other venture.",
  },
  {
    id: 2,
    title: "Design",
    addressOfImage: "/properties/design/design.png",
    text: "The team will possess the expertise to strategically create project plans and execute them effectively, enabling us to gain clear visualizations of our work. They are skilled in designing a roadmap towards achieving success.",
  },
  {
    id: 3,
    title: "Development",
    addressOfImage: "/properties/development/development.png",
    text: "Following the design phase, the team will proceed with the development stage, bringing your idea to life in real-time. You will witness the tangible realization of your vision.",
  },
  {
    id: 4,
    title: "Marketing",
    addressOfImage: "/properties/marketing/marketing.png",
    text: "Marketing plays a vital role in startups, encompassing idea generation, design, and development stages to ensure product readiness. It is essential to create awareness of our presence. Our team possesses the expertise to identify your target audience and effectively market to them.",
  },
  {
    id: 5,
    title: "Maintenance",
    addressOfImage: "/properties/maintenance/maintenance3.png",
    text: "Ultimately, project maintenance becomes crucial. It comprises two key aspects: addressing reported bugs and implementing upgrades. Rest assured, our team is fully prepared to handle both maintenance requirements.",
  },
];

export default function Properties() {
  return (
    <>
      <div className={styles.prop_cont}>
        {properties.map((e) => (
          <div className={styles.property} key={e.id}>
            <div className={`${styles.img_cont} ${styles[e.title]}`}>
              <Image
                src={e.addressOfImage}
                alt={e.title}
                width={150}
                height={150}
                loading="lazy"
              />
            </div>
            <div className={styles.text}>
              <h1>{e.title}</h1>
              <p>{e.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
