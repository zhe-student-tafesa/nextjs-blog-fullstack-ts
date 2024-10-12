import React from "react";
import styles from "./postDetail.module.css";
import Image from "next/image";

const PostDetail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imglContainer}>
        <Image
          src="https://images.pexels.com/photos/27947532/pexels-photo-27947532/free-photo-of-woman-with-food-on-a-picnic.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt={""}
          className={styles.img}
          width={50}
          height={50}
        />
      </div>
      <div className={styles.authorContainer}>
        <div className={styles.topTitle}>Author</div>
        <div className={styles.bottomValue}>Terry</div>
      </div>
      <div className={styles.dateContainer}>
        <div className={styles.topTitle}>Published</div>
        <div className={styles.bottomValue}>09:30</div>
      </div>
    </div>
  );
};

export default PostDetail;
