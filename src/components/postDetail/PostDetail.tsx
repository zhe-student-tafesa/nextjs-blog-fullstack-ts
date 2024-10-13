import React from "react";
import styles from "./postDetail.module.css";
import Image from "next/image";
import { getUser } from "@/lib/mockData";
import { getDBUser } from "@/lib/realData";

const PostDetail = async ({ userId }: { userId: string }) => {
  //   console.log("userId: ", userId);
  //   const user = await getUser(userId);
  const user = await getDBUser(userId);
  //   console.log("user: ", user);
  console.log(typeof user);
  return (
    <div className={styles.container}>
      <div className={styles.imglContainer}>
        <Image
          src={user?.img != null ? user?.img : "/noavatar.png"}
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
        <div className={styles.bottomValue}>
          {user?.createdAt.toString().slice(4, 16)}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
