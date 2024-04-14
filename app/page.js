import FeaturedStores from "@/sections/featuredStores/features";
import styles from "./page.module.css";
import FeaturedRestaurants from "@/sections/featuredRestaurants/featuredRestaurants";
import Button from "@/components/button/button";
import OurMission from "@/sections/ourMission/ourMission";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <video className={styles.video} autoPlay loop muted>
          <source src="/main.mp4" type="video/mp4" />
        </video>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>Exotic Bounty</h1>
          <h3 className={styles.description}>
            Welcome to Exotic Bounty - Your Guide to Memphis’s Exotic Produce
            Markets
            {/* Welcome to Exotic Bounty, your one-stop guide to the exotic fruits
            and vegetables markets in Memphis. Our mission is to connect you
            with local stores offering a cornucopia of unique produce from
            around the world. Whether you’re a food enthusiast looking to
            explore new flavors, or a homesick expat searching for a taste of
            home, we’re here to help you discover and enjoy the diverse culinary
            experiences that Memphis has to offer. */}
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
