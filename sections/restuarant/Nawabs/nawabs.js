import styles from "./page.module.css";

export default function Cafeindia() {
  const images = [
    "/Resturants/Nawabs/1.jpeg",
    "/Resturants/Nawabs/2.jpeg",
    "/Resturants/Nawabs/3.jpeg",
    "/Resturants/Nawabs/4.jpeg",
    "/Resturants/Nawabs/5.jpeg",
    // "/Resturants/CafeIndia/9.jpeg",
  ];
  return (
    <>
      <main className={styles.main}>
        <div className={styles.imgContainer}>
          <img
            src="/Resturants/Nawabs/main.jpeg"
            width="100%"
            height="100%"
            alt="resto"
            className={styles.mainImage}
          />
        </div>
        <div className={styles.ImageText}>
          <h2 className={styles.heading}>Nawab 's</h2>
          <h4 className={styles.description}>
            We’re delighted to introduce Nawab’s Restaurant to our Exotic Bounty
            family. This restaurant is a gem for those seeking the rich and
            diverse flavors of traditional Indian cuisine, particularly the
            royal tastes of Nawabi cuisine.
          </h4>
          <h4 className={styles.description}>
            Nawab’s Restaurant is more than just a place to eat; it’s a culinary
            journey that takes you through the regal flavors and aromatic spices
            of the Nawabs, the historic nobility of India. They are committed to
            providing an authentic dining experience that leaves a lasting
            impression.
          </h4>
          <h4 className={styles.description}>
            Their highly skilled chefs use traditional cooking methods and fresh
            ingredients to create flavorful dishes that capture the essence of
            Nawabi culinary traditions. Each dish is a symphony of different
            flavors, offering an exceptional journey of taste. So, if you’re
            searching for authentic Nawabi cuisine in Memphis, your search ends
            at Nawab’s Restaurant! We promise it will be a culinary experience
            you won’t forget!
          </h4>
        </div>
      </main>
      <main className={styles.main2}>
        <h2 className={styles.heading2}>Step Inside Nawab's: A Gallery</h2>
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
              href="https://www.google.com/maps?sca_esv=494940dbc25649b8&sca_upv=1&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiDm5hd2FicyBtZW1waGlzMgUQABiABDILEAAYgAQYkQIYigUyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBEjqHVC6Ali4HHABeACQAQCYAb4BoAHnEqoBBDAuMTS4AQPIAQD4AQGYAg-gAuATqAIKwgIYEAAYAxi0AhjlAhjqAhgKGIwDGI8B2AEBwgIWEAAYAxi0AhjlAhjqAhiMAxiPAdgBAcICFhAuGAMYtAIY5QIY6gIYjAMYjwHYAQHCAhEQLhiABBiRAhjRAxjHARiKBcICERAuGIAEGJECGLEDGIMBGIoFwgIREC4YgAQYsQMY0QMYgwEYxwHCAgsQABiABBixAxiDAcICDhAuGIAEGLEDGIMBGIoFwgIgEC4YgAQYkQIY0QMYxwEYigUYlwUY3AQY3gQY4ATYAQLCAgoQABiABBhDGIoFwgILEC4YgAQYkQIYigXCAhEQLhiABBiRAhjHARiKBRivAcICChAuGIAEGEMYigXCAgsQLhiABBixAxiDAcICFxAuGIAEGJECGLEDGIMBGMcBGIoFGK8BwgIREAAYgAQYkQIYsQMYgwEYigXCAggQLhiABBixA8ICCBAAGIAEGLEDwgImEC4YgAQYkQIYsQMYgwEYxwEYigUYrwEYlwUY3AQY3gQY4ATYAQLCAg4QLhiABBjHARiYBRivAcICCxAuGIAEGMcBGK8BwgIKEAAYFhgKGB4YD8ICCBAAGBYYChgemAMMugYECAEYCroGBggCEAEYFJIHBjEuMTMuMaAH_LEB&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KW1ZzLrImX-IMSF9Ll4l7LiJ&daddr=3750+S+Houston+Levee+Rd+Suite+%23+107,+Collierville,+TN+38017,+United+States"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                3750 S Houston Levee Rd Suite # 107, Collierville, TN 38017
              </strong>
            </a>
          </h4>
          <h4 className={styles.description2}>
            <strong>Opening Hours: </strong>
            <br />
            <br />
            11.30 AM - 10.00 PM
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
            <strong>Email : CafeIndiamemphis@gmail.com </strong>
          </h4> */}
          <h4 className={styles.description2} style={{ color: "white" }}>
            <strong>Phone no.:+1 901-509-3252 </strong>
          </h4>
          <h4 className={styles.description2} style={{ color: "white" }}>
            <a
              href="https://ordersave.com/nawabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> Menu : ordersave.com</strong>
            </a>
          </h4>
          <h4 className={styles.description2} style={{ color: "white" }}>
            <a
              href="https://nawabsmemphis.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> Website: nawabsmemphis.com</strong>
            </a>
          </h4>
        </div>
      </main>
    </>
  );
}
