"use client";
import React, { useState } from "react";
import styles from "./links.module.css";
import { LinkInterface } from "@/types";
import Link from "next/link";
import NavLink from "./navLink/NavLink";
import Image from "next/image";

const links: LinkInterface[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "About",
    path: "/about",
  },

  {
    title: "Contact",
    path: "/contact",
  },
];
const Links = () => {
  // TEMPORARY
  const session = true;
  const isAdmin = true;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink title={link.title} path={link.path} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && (
              <NavLink title={"Admin"} path={"/admin"} key={"/admin"} />
            )}
            <button className={styles.buttonLogout}>Logout</button>
          </>
        ) : (
          <NavLink title={"Login"} path={"/login"} key={"/login"} />
        )}
      </div>
      <Image
        src="/menu.png"
        alt="menu"
        width={30}
        height={30}
        onClick={() => setIsOpen((prev) => !prev)}
        className={styles.menuButton}
      />
      {/* <Image src={"/menu.png"} alt={""} width={30} height={30} /> */}
      {isOpen && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink title={link.title} path={link.path} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
