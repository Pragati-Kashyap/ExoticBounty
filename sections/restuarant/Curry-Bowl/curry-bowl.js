import styles from "./page.module.css";

export default function AmruthaVillas() {
  const images = [
    "/Resturants/CurryBowl/2.jpeg",
    "/Resturants/CurryBowl/main.jpeg",
    "/Resturants/CurryBowl/3.jpeg",
  ];
  return (
    <>
      <main className={styles.main}>
        <div className={styles.imgContainer}>
          <img
            src="/Resturants/CurryBowl/main.jpeg"
            width="100%"
            height="100%"
            alt="resto"
            className={styles.mainImage}
          />
        </div>
        <div className={styles.ImageText}>
          <h2 className={styles.heading}>Curry Bowl Indian Cuisine</h2>
          <h4 className={styles.description}>
            Welcome to Exotic Bounty! We’re thrilled to introduce you to Curry
            Bowl, a family-owned and operated Indian restaurant that’s a part of
            our Exotic Bounty directory. Curry Bowl is not just a restaurant;
            it’s a place where every Indian culinary desire is fulfilled. At
            Curry Bowl, they understand and cater to the diverse tastes and
            preferences of their patrons. They offer a daily buffet featuring a
            variety of 100 Indian dishes, ensuring a unique dining experience
            every day.
          </h4>
          <h4 className={styles.description}>
            Curry Bowl prides itself on being an authentic yet innovative
            eatery. Their menu honors tradition while reinventing it, offering a
            culinary journey through the extraordinary tastes and textures of
            Indian cuisine. The essence of Indian food lies in the variety of
            flavors used, and Curry Bowl captures this essence perfectly.
          </h4>
          <h4 className={styles.description}>
            Their food is simple, fresh, and flavorful, appealing to a wide
            range of palates. A visit to Curry Bowl is more than just a meal;
            it’s an experience that engages all your senses.
          </h4>
        </div>
      </main>
      <main className={styles.main2}>
        <h2 className={styles.heading2}>Step Inside Curry Bowl: A Gallery</h2>
        <div className={styles.grid}>
          {images.map((image, index) => (
            <div key={index} className={styles.gridItem}>
              <img src={image} className={styles.thumbnail} />
            </div>
          ))}
        </div>
      </main>
      <main className={styles.main3}>
        <div className={styles.left}>
          <h2 className={styles.heading2}>Location</h2>
          <img
            src="/location2.jpeg"
            width={400}
            height={300}
            alt=""
            className={styles.leftImg}
          />
          <h4 className={styles.description2}>
            <a
              href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQLhhA0gEINDcyOWowajmoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KeVnaS_PmX-IMfAJMqChbQAT&daddr=4141+Hacks+Cross+Rd+STE+101,+Memphis,+TN+38125,+United+States"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                4141 Hacks Cross Rd STE 101, Memphis, TN 38125, United States
              </strong>
            </a>
          </h4>
          <h4 className={styles.description2}>
            <strong>Opening Hours: </strong>
            <br />
            <br />
            Wed-Mon: 11:00 AM to 10 PM
            <br />
            <br />
            Tuesday Closed
            <br />
          </h4>
        </div>
        <div className={styles.right}>
          <h2 className={styles.heading2}>Contact</h2>
          <img
            src="/contact.png"
            width={400}
            height={300}
            alt=""
            className={styles.leftImg}
          />
          <h4 className={styles.description2} style={{ color: "white" }}>
            <strong>Email : currybowItn@gmail.com </strong>
          </h4>
          <h4 className={styles.description2} style={{ color: "white" }}>
            <strong>Phone no.: 901-207-6051 </strong>
          </h4>
          <h4 className={styles.description2} style={{ color: "white" }}>
            <a
              href="https://www.currybowlindiancuisine.com/menu.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> Menu : currybowlindiancuisine.com/menu</strong>
            </a>
          </h4>
          <h4 className={styles.description2} style={{ color: "white" }}>
            <a
              href="https://currybowlindiancuisine.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> Website: currybowlindiancuisin.com</strong>
            </a>
          </h4>
        </div>
      </main>
    </>
  );
}
