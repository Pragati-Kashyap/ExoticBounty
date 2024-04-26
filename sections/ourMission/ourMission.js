import styles from "./page.module.css";

export default function OurMission() {
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
    <div className={styles.main} id="ourMission">
      <h2 className={styles.heading}>Our Mission</h2>
      {/* <div className={styles.cardContainer}>
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
      </div> */}
      <div className={styles.descriptionContainer}>
        <h4 className={styles.description}>
          At Exotic Bounty, we believe that food is more than just sustenance -
          it’s a journey, a story, and a celebration of culture. We understand
          that being in a new city, away from the familiar tastes and flavors of
          home, can be challenging. That’s why our mission is to make your
          culinary journey in Memphis as diverse and exciting as the city
          itself.
        </h4>
        <h4 className={styles.description}>
          For our Indian friends in Memphis, we know how important it is to find
          the right ingredients for your traditional dishes. Whether it’s the
          tangy tamarind for your sambar, the aromatic basmati rice for your
          biryani, or the juicy mangoes for your aamras, we’re here to help you
          find them.
        </h4>
        <h4 className={styles.description}>
          We aim to be your trusted guide to stores selling Indian fruits,
          vegetables, and other unique food items in Memphis. We understand that
          every region in India has its unique culinary palette, and we strive
          to cater to those diverse needs.
        </h4>
        <h2 className={styles.lastDescription} style={{ marginBottom: "40px" }}>
          -- Our Exotic Bounty will make your culinary journey in Memphis feel a
          little more like home.
        </h2>
      </div>
    </div>
  );
}
