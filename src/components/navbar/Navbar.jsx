import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>PaperNET</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.li}>Homepage</Link>
        <Link href="/" className={styles.li}>Contact</Link>
        <Link href="/" className={styles.li}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
