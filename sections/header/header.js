"use client";
import Button from "@/components/button/button";
import styles from "./page.module.css";

export default function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.header}>
      <img src="/logo.png" width={100} height={100} alt="logo" />
      <div className={styles.links}>
        {/* <a href="/">Home</a>
        <a href="/stores">Stores</a>
        <a href="/restaurant">Restaurant</a>
        <a href="/contactUs">Contact Us</a> */}
        <a href="#home" onClick={() => scrollToSection("home")}>
          Home
        </a>
        <a href="#ourMission" onClick={() => scrollToSection("ourMission")}>
          Our Mission
        </a>
        <a href="#restaurant" onClick={() => scrollToSection("restaurant")}>
          Restaurant
        </a>
        <a href="#stores" onClick={() => scrollToSection("stores")}>
          Stores
        </a>
      </div>
      <Button text="Explore" />
    </div>
  );
}
