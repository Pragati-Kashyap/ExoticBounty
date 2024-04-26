import styles from "./page.module.css";

export default function FeaturedStores() {
  const cardData = [
    {
      id: 1,
      name: "Apna Bazaar",
      image: "/apnaBazaar/main.JPEG",
      location:
        "3750 S Houston Levee Rd, Collierville, TN, United States, Tennessee",
    },
    {
      id: 2,
      name: "Balaji",
      image: "/Balaji/main.JPEG",
      location: "3810 Hacks Cross Rd #104, Memphis, TN 38125, United States",
    },
    {
      id: 3,
      name: "Sai Gruha India Mart",
      image: "/SaiGruha/main.JPEG",
      location: "7233 Winchester Road, Memphis, TN 38125, United States, 38197",
    },
    {
      id: 4,
      name: "Sam's Indian Grocery Store",
      image: "/Sam'sIndian/main.JPEG",
      location:
        "305 New Byhalia Rd #103, Collierville, TN 38017, United States",
    },
    // Add more objects for additional cards if needed
  ];

  return (
    <div className={styles.main} id="stores">
      <h2 className={styles.heading}>Featured Stores</h2>
      <div className={styles.cardContainer}>
        {/* <div className={styles.card}>
          <img
            src="/apnaBazaar/main.JPEG"
            width={120}
            height={120}
            alt="apna"
            className={styles.cardImage}
          />
          <div className={styles.cardTextContainer}>
            <div className={styles.cardText}>Apna Bazaar</div>
            <div className={styles.locationContainer}>
              <img
                src="/icons/location.svg"
                width={22}
                height={22}
                alt=""
                className={styles.locationIcon}
              />
              3750 S Houston Levee Rd, Collierville, TN, United States,
              Tennessee
            </div>
          </div>
        </div> */}
        {cardData.map((card) => (
          <div key={card.id} className={styles.card}>
            <img
              src={card.image}
              width={120}
              height={120}
              alt={card.name}
              className={styles.cardImage}
            />
            <div className={styles.cardTextContainer}>
              <div className={styles.cardText}>{card.name}</div>
              <div className={styles.locationContainer}>
                <img
                  src="/icons/location.svg"
                  width={22}
                  height={22}
                  className={styles.locationIcon}
                />
                {card.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
