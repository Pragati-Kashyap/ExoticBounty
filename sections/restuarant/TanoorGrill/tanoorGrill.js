import styles from "./page.module.css";

export default function TanoorGrill() {
  const images = [
    "/Resturants/tanoorGrill/2.jpeg",
    "/Resturants/tanoorGrill/1.jpeg",
  ];
  return (
    <>
      <main className={styles.main}>
        <div className={styles.imgContainer}>
          <img
            src="/Resturants/tanoorGrill/main.jpeg"
            width="100%"
            height="100%"
            alt="resto"
            className={styles.mainImage}
          />
        </div>
        <div className={styles.ImageText}>
          <h2 className={styles.heading}>Tannoor Grill</h2>
          <h4 className={styles.description}>
            At Tannor Grill, they believe in the power of Indian cuisine and its
            ability to bring people together. They are committed to providing an
            authentic dining experience that leaves a lasting impression12.
            Their highly skilled chefs use unique ingredients to create
            flavorful dishes that capture the essence of India’s culinary
            traditions12.
          </h4>
          <h4 className={styles.description}>
            So, if you’re searching for authentic Indian cuisine in Memphis,
            your search ends at Tannor Grill! We promise it will be a culinary
            experience you won’t forget!
          </h4>
        </div>
      </main>
      <main className={styles.main2}>
        <h2 className={styles.heading2}>
          Step Inside Tannoor Grill Point: A Gallery
        </h2>
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
              href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDkyNjZqMGoxqAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KT-OTbBqnH-IMT9FdTbDh-uv&daddr=830+N+Germantown+Pkwy,+Cordova,+TN+38018,+United+States"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                830 N Germantown Pkwy, Cordova, TN 38018, United States
              </strong>
            </a>
          </h4>
          <h4 className={styles.description2}>
            <strong>Opening Hours: </strong>
            <br />
            <br />
            5:00 - 9:00pm
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
            <strong>Email : info@tanoorgrill.com </strong>
          </h4>
          <h4 className={styles.description2} style={{ color: "white" }}>
            <strong>Phone no.:+1 901-443-5222</strong>
          </h4>
          <h4 className={styles.description2} style={{ color: "white" }}>
            <a
              href="https://tannoorgrill.com/menu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> Menu : tannoorgrill.com/menu</strong>
            </a>
          </h4>
          <h4 className={styles.description2} style={{ color: "white" }}>
            <a
              href="https://tannoorgrill.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> Website: tannoorgrill.com</strong>
            </a>
          </h4>
        </div>
      </main>
    </>
  );
}
