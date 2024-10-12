import Image from "next/image";
import styles from "./singleBlog.module.css";
import PostDetail from "@/components/postDetail/PostDetail";

export default function SingleBlogPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/27947532/pexels-photo-27947532/free-photo-of-woman-with-food-on-a-picnic.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt={""}
          className={styles.img}
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <PostDetail />
        <p className={styles.desc}>
          Expand all Common Units & Resources LB - Industrial Printing LC -
          Commercial Photography LF - Graphic Design LG - Multimedia PA -
          Apparel VA - Visual Art VE - Performing Arts VM - Music
        </p>
      </div>
    </div>
  );
}
