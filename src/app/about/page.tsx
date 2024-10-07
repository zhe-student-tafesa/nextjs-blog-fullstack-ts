import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>About Agency</h2>
        <h1 className={styles.head}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.labelContainer}>
          <div className={styles.columnContainer}>
            <h3 className={styles.numbers}>10+</h3>
            <p className={styles.details}>Year of experience</p>
          </div>

          <div className={styles.columnContainer}>
            <h3 className={styles.numbers}>324K+</h3>
            <p className={styles.details}>People reached</p>
          </div>

          <div className={styles.columnContainer}>
            <h3 className={styles.numbers}>5K+</h3>
            <p className={styles.details}>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" className={styles.aboutImage} alt="" fill />
      </div>
    </div>
  );
}
