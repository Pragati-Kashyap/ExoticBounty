import styles from "./page.module.css";

export default function Cafeindia() {
  const images = [
    "/Resturants/KabobG/4.JPEG",
    "/Resturants/KabobG/2.JPEG",
    "/Resturants/KabobG/3.JPEG",
    "/Resturants/KabobG/6.JPEG",
    "/Resturants/KabobG/5.JPEG",
  ];
  return (
    <>
      <main className={styles.main}>
        <div className={styles.imgContainer}>
          <img
            src="/Resturants/KabobG/main.JPG"
            width="100%"
            height="100%"
            alt="resto"
            className={styles.mainImage}
          />
        </div>
        <div className={styles.ImageText}>
          <h2 className={styles.heading}>Kabob G</h2>
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
            src="/location2.JPEG"
            width={400}
            height={300}
            alt=""
            className={styles.leftImg}
          />
          <h4 className={styles.description2}>
            <a
              href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDQ1MTZqMGoxqAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KcGS2wAvm3-IMSfvFQdDr4Fn&daddr=7960+Winchester+Rd+%23103,+Memphis,+TN+38125,+United+States"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                7960 Winchester Rd #103, Memphis, TN 38125, United States
              </strong>
            </a>
          </h4>
          <h4 className={styles.description2}>
            <strong>Opening Hours: </strong>
            <br />
            <br />
            11:00 AM - 09:30 PM
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
            <strong>Email : info@kabobghalal.com </strong>
          </h4>
          <h4 className={styles.description2} style={{ color: "white" }}>
            <strong>Phone no.: +1 901-512-5520</strong>
          </h4>
          <h4 className={styles.description2} style={{ color: "white" }}>
            <a
              href="https://kabobghalal.com/menu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> Menu : kabobghalal.com/menu</strong>
            </a>
          </h4>
          <h4 className={styles.description2} style={{ color: "white" }}>
            <a
              href="https://kabobghalal.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> Website: kabobghalal.com</strong>
            </a>
          </h4>
        </div>
      </main>
    </>
  );
}
