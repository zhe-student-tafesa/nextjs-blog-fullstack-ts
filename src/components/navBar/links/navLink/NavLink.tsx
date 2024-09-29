"use client";
import React from "react";
import styles from "./navLink.module.css";
import { LinkInterface } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink: React.FC<LinkInterface> = ({ path, title }) => {
  const pathName = usePathname();
  //   console.log("pathName: ", pathName);
  // use ``,  use &&
  return (
    <div
      className={`${styles.container}  ${pathName === path && styles.active}`}
    >
      <Link href={path} key={title}>
        {title}
      </Link>
    </div>
  );
};

export default NavLink;
