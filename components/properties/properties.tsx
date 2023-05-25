import styles from "./properties.module.css";

import Image from "next/image";

export default function Properties() {
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
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis esse aliquid officiis. Culpa doloribus, alias",
    },
    {
      id: 2,
      title: "Design",
      addressOfImage: "/properties/design/design.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis esse aliquid officiis. Culpa doloribus, alias",
    },
    {
      id: 3,
      title: "Development",
      addressOfImage: "/properties/development/development.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis esse aliquid officiis. Culpa doloribus, alias",
    },
    {
      id: 4,
      title: "Marketing",
      addressOfImage: "/properties/marketing/marketing.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis esse aliquid officiis. Culpa doloribus, alias",
    },
    {
      id: 5,
      title: "Maintenance",
      addressOfImage: "/properties/maintenance/maintenance3.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis esse aliquid officiis. Culpa doloribus, alias",
    },
  ];
  return (
    <>
      <div className={styles.prop_cont}>
        {properties.map((e) => (
          <div className={styles.property} key={e.id}>
            <div className={`${styles.img_cont} ${styles[e.title]}`}>
              <Image
                src={e.addressOfImage}
                alt={e.title}
                width={250}
                height={250}
                priority
              />
            </div>
            <div>
              <h1>{e.title}</h1>
              <p>{e.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
