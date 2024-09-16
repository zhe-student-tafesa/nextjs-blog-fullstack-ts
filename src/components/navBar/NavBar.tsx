import React from "react";
import styles from "./navBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">Logo</Link>
      <div>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default NavBar;
