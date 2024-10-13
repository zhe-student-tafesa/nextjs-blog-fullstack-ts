import React from "react";
import styles from "./postDetail.module.css";
import Image from "next/image";
import { getUser } from "@/lib/mockData";

const PostDetail = async ({ userId }: { userId: number }) => {
  //   console.log("userId: ", userId);
  const user = await getUser(userId);
  //   console.log("user: ", user);
  console.log(typeof user);
  return (
    <div className={styles.container}>
      <div className={styles.imglContainer}>
        <Image
          src={
            user?.img != null
              ? user?.img
              : "https://images.pexels.com/photos/27947532/pexels-photo-27947532/free-photo-of-woman-with-food-on-a-picnic.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt={""}
          className={styles.img}
          width={50}
          height={50}
        />
      </div>
      <div className={styles.authorContainer}>
        <div className={styles.topTitle}>Author</div>
        <div className={styles.bottomValue}>{user?.username}</div>
      </div>
      <div className={styles.dateContainer}>
        <div className={styles.topTitle}>Published</div>
        <div className={styles.bottomValue}>09:30</div>
      </div>
    </div>
  );
};

export default PostDetail;
