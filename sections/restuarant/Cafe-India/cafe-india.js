import styles from "./page.module.css";

export default function Cafeindia() {
  const images = [
    "/Resturants/CafeIndia/8.jpeg",
    "/Resturants/CafeIndia/1.jpeg",
    "/Resturants/CafeIndia/2.jpeg",
    "/Resturants/CafeIndia/3.jpeg",
    "/Resturants/CafeIndia/4.jpeg",
    "/Resturants/CafeIndia/7.jpeg",
    // "/Resturants/CafeIndia/9.jpeg",
  ];
  return (
    <>
      <main className={styles.main}>
        <div className={styles.imgContainer}>
          <img
            src="/Resturants/CafeIndia/main.jpeg"
            width="100%"
            height="100%"
            alt="resto"
            className={styles.mainImage}
          />
        </div>
        <div className={styles.ImageText}>
          <h2 className={styles.heading}>Cafe India</h2>
          <h4 className={styles.description}>
            We’re delighted to introduce Cafe India to our Exotic Bounty family.
            With a legacy of serving thousands of customers and catering events
            in the Nashville area for over a decade, Cafe India is now excited
            to open its second location in the Memphis region
          </h4>
          <h4 className={styles.description}>
            Cafe India is not just a restaurant; it’s a culinary journey that
            takes you through the rich and diverse flavors of traditional Indian
            cuisine. They are committed to providing exceptional customer
            service and authentic Indian food that leaves a lasting impression.
          </h4>
          <h4 className={styles.description}>
            Their highly skilled chefs use unique ingredients to create
            flavorful dishes that capture the essence of India’s culinary
            traditions. Each dish is a symphony of different flavors, offering
            an exceptional journey of taste.
          </h4>
        </div>
      </main>
      <main className={styles.main2}>
        <h2 className={styles.heading2}>Step Inside Cafe India A Gallery</h2>
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
              href="https://www.google.com/maps/dir//3810+Hacks+Cross+Rd+Ste+%23+101,+Memphis,+TN+38125,+United+States/@35.044847,-89.8771662,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x887f9bbf6f46ab41:0x5c4e3d9c6cba251!2m2!1d-89.7947651!2d35.0448749?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                3810 Hacks Cross Road, Suite 101, Memphis TN 38125
              </strong>
            </a>
          </h4>
          <h4 className={styles.description2}>
            <strong>Opening Hours: </strong>
            <br />
            <br />
            10.30 AM - 10.00 PM
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
            <strong>Email : CafeIndiamemphis@gmail.com </strong>
          </h4>
          <h4 className={styles.description2} style={{ color: "white" }}>
            <strong>Phone no.: +1 901-695-1292 </strong>
          </h4>
          <h4 className={styles.description2} style={{ color: "white" }}>
            <a
              href="https://www.clover.com/online-ordering/cafe-india-memphis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> Menu : clover.com</strong>
            </a>
          </h4>
          <h4 className={styles.description2} style={{ color: "white" }}>
            <a
              href="https://cafeindiamemphis.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> Website: cafeindiamemphis.com</strong>
            </a>
          </h4>
        </div>
      </main>
    </>
  );
}
