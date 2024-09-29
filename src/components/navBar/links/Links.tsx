import React from "react";
import styles from "./links.module.css";
import { LinkInterface } from "@/types";
import Link from "next/link";
import NavLink from "./navLink/NavLink";

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
  return (
    <div className={styles.container}>
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
  );
};

export default Links;
