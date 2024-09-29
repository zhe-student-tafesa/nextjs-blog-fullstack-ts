import React from "react";
import styles from "./navBar.module.css";
import Link from "next/link";
import Links from "./links/Links";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">Logo</Link>
      <Links />
    </div>
  );
};

export default NavBar;
