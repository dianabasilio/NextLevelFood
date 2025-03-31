import React from "react";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import BackgroundHeader from "@/components/BackgroundHeader/BackgroundHeader";
import styles from "@/components/Header/Header.module.scss";
import NavLink from "@/components/NavLink/NavLink";

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
              <NavLink href="/meals"> Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community"> Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
