"use client";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./NavLink.module.scss";

interface NavLinkProps {
  children: ReactNode;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href }) => {
  const currentPath = usePathname();
  return (
    <Link
      href={href}
      className={
        currentPath.startsWith(href)
          ? `${styles.active} ${styles.link}`
          : styles.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
