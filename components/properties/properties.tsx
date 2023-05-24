import styles from "./properties.module.css";

import Image from "next/image";

export default function Properties() {
  let properties: { title: string; addressOfImage: string; text: string }[] = [
    {
      title: "Team",
      addressOfImage: "/properties/team/team.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis esse aliquid officiis. Culpa doloribus, alias",
    },
    {
      title: "Design",
      addressOfImage: "/properties/design/design.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis esse aliquid officiis. Culpa doloribus, alias",
    },
    {
      title: "Development",
      addressOfImage: "/properties/development/development.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis esse aliquid officiis. Culpa doloribus, alias",
    },
    {
      title: "Marketing",
      addressOfImage: "/properties/marketing/marketing.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis esse aliquid officiis. Culpa doloribus, alias",
    },
    {
      title: "Maintenance",
      addressOfImage: "/properties/maintenance/maintenance3.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis esse aliquid officiis. Culpa doloribus, alias",
    },
  ];
  return (
    <>
      <div className={styles.prop_cont}>
        {properties.map((e) => (
          <div className={styles.property}>
            <Image
              src={e.addressOfImage}
              alt="My Image"
              width={250}
              height={250}
              priority
            />
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
