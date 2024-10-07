import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.header}>Create Thoughts Agency.</h1>
        <p className={styles.text}>
          These fruits will make you feel alive. This is an example page. It’s
          different from a blog post because it will stay in one place
        </p>
        <div className={styles.buttonsContainer}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt={""} fill />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill />
      </div>
    </div>
  );
}
