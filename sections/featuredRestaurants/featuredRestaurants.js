"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function FeaturedRestaurants() {
  const router = useRouter();

  const handleCardClick = (name) => {
    const encodedName = encodeURIComponent(name);
    router.push(name);
  };
  const cardData = [
    {
      id: 1,
      name: "Amrutha Villas",
      image: "/Resturants/AmruthaVillas/main.JPEG",
      location:
        "3750 S Houston Levee Rd, Collierville, TN, United States, Tennessee",
      link: "/restaurant/Amrutha-Villas",
    },
    {
      id: 2,
      name: "Cafe India",
      image: "/Resturants/CafeIndia/main.JPEG",
      location:
        "3750 S Houston Levee Rd, Collierville, TN, United States, Tennessee",
      link: "/restaurant/Cafe-India",
    },
    {
      id: 3,
      name: "Curry Bowl",
      image: "/Resturants/CurryBowl/main.JPEG",
      location:
        "3750 S Houston Levee Rd, Collierville, TN, United States, Tennessee",
      link: "/restaurant/Curry-Bowl",
    },
    {
      id: 4,
      name: "Hyderabad House",
      image: "/Resturants/HyderabadHouse/main.JPEG",
      location:
        "3750 S Houston Levee Rd, Collierville, TN, United States, Tennessee",
      link: "/restaurant/Hyderabad-House",
    },
    {
      id: 5,
      name: "Kabob G",
      image: "/Resturants/KabobG/main.JPG",
      location:
        "3750 S Houston Levee Rd, Collierville, TN, United States, Tennessee",
      link: "/restaurant/Kabob-G",
    },
    {
      id: 6,
      name: "Nawabs",
      image: "/Resturants/Nawabs/main.JPEG",
      location:
        "3750 S Houston Levee Rd, Collierville, TN, United States, Tennessee",
      link: "/restaurant/Nawabs",
    },
    {
      id: 7,
      name: "Sai Biryani Point",
      image: "/Resturants/SaiBriyaniPoint/main.JPG",
      location:
        "3750 S Houston Levee Rd, Collierville, TN, United States, Tennessee",
      link: "/restaurant/Sai-Biryani-Point",
    },
    {
      id: 8,
      name: "Tanoor Grill",
      image: "/Resturants/TanoorGrill/main.JPEG",
      location:
        "3750 S Houston Levee Rd, Collierville, TN, United States, Tennessee",
      link: "/restaurant/Tanoor-Grill",
    },
  ];

  return (
    <div className={styles.main} id="restaurant">
      <h2 className={styles.heading}>Featured Restaurants</h2>
      <div className={styles.cardContainer}>
        {/* {cardData.map((card) => (
          <div key={card.id} className={styles.card  onClick={() => handleCardClick(card.name)}>
            <img
              src={card.image}
              width={120}
              height={120}
              alt={card.name}
              className={styles.cardImage}
            />
            <div className={styles.cardTextContainer}>
              <div className={styles.cardText}>{card.name}</div>
            </div>
          </div>
        ))} */}
        {cardData.map((card) => (
          <div
            key={card.id}
            className={styles.card}
            onClick={() => handleCardClick(card.link)}
          >
            <img
              src={card.image}
              width={120}
              height={120}
              alt={card.name}
              className={styles.cardImage}
            />
            <div className={styles.cardTextContainer}>
              <div className={styles.cardText}>{card.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
