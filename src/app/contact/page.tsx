import Image from "next/image";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt={""} fill className={styles.img} />
      </div>

      <form className={styles.formContainer}>
        <input type="text" placeholder="Name and Surname" name="name"></input>
        <input type="email" placeholder="Email Adress" name="email"></input>
        <input
          type="text"
          placeholder="Phone Number(optional)"
          name="phone"
        ></input>
        <textarea placeholder="Message" name="message" rows={7}></textarea>
        <button>Send</button>
      </form>
    </div>
  );
}
