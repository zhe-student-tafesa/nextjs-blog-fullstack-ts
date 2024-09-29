import React from "react";
import styles from "./links.module.css";
import { LinkInterface } from "@/types";
import Link from "next/link";

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
  return (
    <div>
      {links.map((link) => (
        <Link href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
