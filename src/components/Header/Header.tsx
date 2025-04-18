import React from "react";
import Link from "next/link";
import Image from "next/image";
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
          <div className={styles.logoImg}>
            <Image
              src={logoImg.src}
              alt="A plate with food on it"
              width={100}
              height={100}
            />
          </div>

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
