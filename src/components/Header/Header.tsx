import Link from "next/link";
import logoImg from "@/assets/logo.png";
import React from "react";

import BackgroundHeader from "@/components/BackgroundHeader/BackgroundHeader";
import styles from "@/components/Header/Header.module.scss";

const Header = () => {
  return (
    <>
      <BackgroundHeader></BackgroundHeader>
      <header className={styles.header}>
        <Link className={styles.logo} href={"/"}>
          <img
            className={styles.logoImg}
            src={logoImg.src}
            alt="A plate with food on it"
          />
          <span>NextLevel Food</span>
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href={"/meals"}> Browse Meals</Link>
            </li>
            <li>
              <Link href={"/community"}> Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
