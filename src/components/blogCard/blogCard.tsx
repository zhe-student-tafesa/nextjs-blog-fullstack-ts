import React from "react";
import styles from "./blogCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { MockPostInterface } from "@/types";
{
  /* Step 2: { post }---Parsing out parameters */
}
{
  /* Step 3: { post: MockPostInterface }---Specifying parameter types */
}
const BlogCard = ({ post }: { post: MockPostInterface }) => {
  // console.log("post: ", post);
  const { id, title, desc, userId, slug, img } = post;
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={
              img != null
                ? img
                : "https://images.pexels.com/photos/27947532/pexels-photo-27947532/free-photo-of-woman-with-food-on-a-picnic.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt={""}
            fill
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{desc}</p>
        <Link href={`/blog/${id}`} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
