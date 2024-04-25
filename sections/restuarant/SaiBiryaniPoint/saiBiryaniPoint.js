import styles from "./page.module.css";

export default function Cafeindia() {
  const images = [
    "/Resturants/saiBriyaniPoint/main.jpg",
    "/Resturants/saiBriyaniPoint/2.jpg",
  ];
  return (
    <>
      <main className={styles.main}>
        <div className={styles.imgContainer}>
          <img
            src="/Resturants/saiBriyaniPoint/main.jpg"
            width="100%"
            height="100%"
            alt="resto"
            className={styles.mainImage}
          />
        </div>
        <div className={styles.ImageText}>
          <h2 className={styles.heading}>Sai Biryani Point</h2>
          <h4 className={styles.description}>
            At Sai Biryani Point, they believe in the power of Indian cuisine
            and its ability to bring people together. They are committed to
            providing an authentic dining experience that leaves a lasting
            impression12. Their highly skilled chefs use unique ingredients to
            create flavorful dishes that capture the essence of India’s culinary
            traditions12.
          </h4>
          <h4 className={styles.description}>
            So, if you’re searching for authentic Indian cuisine in Memphis,
            your search ends at Sai Biryani Point! We promise it will be a
            culinary experience you won’t forget!
          </h4>
        </div>
      </main>
      <main className={styles.main2}>
        <h2 className={styles.heading2}>
          Step Inside Sai Biryani Point: A Gallery
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
              href="https://www.google.com/maps/dir//7233+Winchester+Rd,+Memphis,+TN+38125,+United+States/@35.0484668,-89.9048314,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x887f9a854da74793:0xec5301cf7b55217e!2m2!1d-89.8224303!2d35.0484947?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                7233 Winchester Rd, Memphis, TN 38125, United States
              </strong>
            </a>
          </h4>
          <h4 className={styles.description2}>
            <strong>Opening Hours: </strong>
            <br />
            <br />
            11:30 AM - 09:30 PM
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
          {/* <h4 className={styles.description2} style={{ color: "white" }}>
            <strong>Email : info@kabobghalal.com </strong>
          </h4> */}
          <h4 className={styles.description2} style={{ color: "white" }}>
            <strong>Phone no.: +1 901-249-4549</strong>
          </h4>
          <h4 className={styles.description2} style={{ color: "white" }}>
            <a
              href="https://www.mealhi5.com/Sai-Biryani-Point/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> Menu : mealhi5.com</strong>
            </a>
          </h4>
          <h4 className={styles.description2} style={{ color: "white" }}>
            <a
              href="http://www.saibiryanipointmemphis.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> Website: saibiryanipointmemphis.com</strong>
            </a>
          </h4>
        </div>
      </main>
    </>
  );
}
