import Button from "@/components/button/button";
import styles from "./page.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <img src="/logo.png" width={100} height={100} alt="logo" />
      <div className={styles.links}>
        <a href="/">Home</a>
        <a href="/stores">Stores</a>
        <a href="/restaurant">Restaurant</a>
        <a href="/contactUs">Contact Us</a>
      </div>
      <Button text="Explore" />
    </div>
  );
}
