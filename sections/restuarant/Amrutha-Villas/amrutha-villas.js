import styles from "./page.module.css";

export default function AmruthaVillas() {
  const images = [
    "/Resturants/AmruthaVillas/1.JPEG",
    "/Resturants/AmruthaVillas/2.JPEG",
    "/Resturants/AmruthaVillas/3.JPEG",
    "/Resturants/AmruthaVillas/4.JPEG",
  ];
  return (
    <>
      <main className={styles.main}>
        <div className={styles.imgContainer}>
          <img
            src="/Resturants/AmruthaVillas/main.JPEG"
            width="100%"
            height="100%"
            alt="resto"
            className={styles.mainImage}
          />
        </div>
        <div className={styles.ImageText}>
          <h2 className={styles.heading}>Amrutha Vilas</h2>
          <h4 className={styles.description}>
            Welcome to Exotic Bounty! We’re thrilled to introduce you to Amrutha
            Vilas, one of the best Indian restaurants in Collierville,
            Tennessee, and a part of our directory. At Amrutha Vilas, you’re
            invited on a culinary journey through the vibrant and diverse
            flavors from the states of India.
          </h4>
          <h4 className={styles.description}>
            Amrutha Vilas is a celebration of India’s rich cultural heritage and
            flavorful cuisine. They are dedicated to serving authentic Indian
            dishes prepared with utmost care and using the freshest ingredients
            available. Their skilled team of chefs meticulously handpick the
            finest produce, herbs, and spices, ensuring that every dish bursts
            with vibrant flavors and delightful aromas.
          </h4>
          <h4 className={styles.description}>
            Among all the Indian restaurants in Memphis, Germantown,
            Collierville, Olive Branch, Cordova, and beyond, Amrutha Vilas
            stands out with its commitment to excellence. They prepare their
            food from scratch every day, allowing you to experience the true
            essence of Indian culinary traditions.
          </h4>
        </div>
      </main>
      <main className={styles.main2}>
        <h2 className={styles.heading2}>
          Step Inside Amrutha Vilas: A Gallery
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
            src="/location2.JPEG"
            width={400}
            height={300}
            alt=""
            className={styles.leftImg}
          />
          <h4 className={styles.description2}>
            <a
              href="https://www.google.com/maps/dir//9959+Winchester+Rd,+Collierville,+TN+38017,+United+States/@35.0465376,-89.8156361,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x887f994ba0463fd3:0x13dc464b31630d58!2m2!1d-89.733235!2d35.0465655?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                9959 Winchester Rd, Collierville, TN 38017, United States
              </strong>
            </a>
          </h4>
          <h4 className={styles.description2}>
            <strong>Opening Hours: </strong>
            <br />
            <br />
            Sunday - Thursday: 11 am–2:30 pm, 5–9:30 pm
            <br />
            Friday - Saturday: 11 am–2:30 pm, 5–10 pm
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
            <strong>Phone no.: +1 901-791-4289 </strong>
          </h4>
          <h4 className={styles.description2} style={{ color: "white" }}>
            <a
              href="https://amrutha-vilas.com/menu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> Menu : amrutha-villas.come</strong>
            </a>
          </h4>
          <h4 className={styles.description2} style={{ color: "white" }}>
            <a
              href="https://amrutha-vilas.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> Website: amrutha-vilas.come</strong>
            </a>
          </h4>
        </div>
      </main>
    </>
  );
}
