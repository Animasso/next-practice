import React from "react";
import Link from "next/link";
import Styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={Styles.navStyle}>
      <Link href="/"> Accueil</Link>
      <Link href="/liste"> Listes</Link>
      <Link href="/gallery"> Gallery</Link>
      <Link href="/cours"> Cours Bitcoin</Link>
      <Link href="/addWord"> addWord</Link>
    </nav>
  );
}
