import FeaturedStores from "@/sections/featuredStores/features";
import styles from "./page.module.css";
import FeaturedRestaurants from "@/sections/featuredRestaurants/featuredRestaurants";
import Button from "@/components/button/button";
import OurMission from "@/sections/ourMission/ourMission";

export default function Home() {
  return (
    <>
      <main className={styles.main} id="home">
        <video className={styles.video} autoPlay loop muted>
          <source src="/main.mp4" type="video/mp4" />
        </video>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>Exotic Bounty</h1>
          <h3 className={styles.description}>
            Welcome to Exotic Bounty - Your Guide to Memphis’s Exotic Produce
            Markets
          </h3>
          <h5 className={styles.smallDescription}>
            - Navigating a new city can be challenging, especially when you’re
            looking for a taste of home. At Exotic Bounty, we aim to bridge that
            gap. We’re your comprehensive guide to finding exotic fruits,
            vegetables, and other unique food items native to countries like
            India and Mexico, right here in Memphis.
          </h5>
        </div>
        {/* <Button text="Explore" /> */}
      </main>
      <OurMission />
      <FeaturedRestaurants />
      <FeaturedStores />
    </>
  );
}
