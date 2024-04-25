import styles from "./page.module.css";

export default function HyderabadHouse() {
  const images = [
    "/Resturants/HyderabadHouse/1.jpg",
    "/Resturants/HyderabadHouse/3.jpeg",
    "/Resturants/HyderabadHouse/4.jpeg",
    "/Resturants/HyderabadHouse/5.jpeg",
    "/Resturants/HyderabadHouse/6.jpeg",
    "/Resturants/HyderabadHouse/2.jpg",
    // "/Resturants/CafeIndia/9.jpeg",
  ];
  return (
    <>
      <main className={styles.main}>
        <div className={styles.imgContainer}>
          <img
            src="/Resturants/HyderabadHouse/main.jpeg"
            width="100%"
            height="100%"
            alt="resto"
            className={styles.mainImage}
          />
        </div>
        <div className={styles.ImageText}>
          <h2 className={styles.heading}>Hyderabad Biryani</h2>
          <h4 className={styles.description}>
            We’re excited to introduce Hyderabad House Biryani to our Exotic
            Bounty family. This restaurant is a haven for those seeking the rich
            and diverse flavors of traditional Indian cuisine, specifically the
            world-renowned Hyderabadi biryani. Hyderabad House Biryani is more
            than just a restaurant; it’s a culinary journey that takes you
            through the vibrant flavors and aromatic spices of Hyderabad, a city
            famous for its biryani. They are committed to providing an authentic
            dining experience that leaves a lasting impression.
          </h4>
          <h4 className={styles.description}>
            Their highly skilled chefs use traditional cooking methods and fresh
            ingredients to create flavorful dishes that capture the essence of
            Hyderabad’s culinary traditions. Each dish is a symphony of
            different flavors, offering an exceptional journey of taste. So, if
            you’re searching for authentic Hyderabadi biryani in Memphis, your
            search ends at Hyderabad House Biryani! We promise it will be a
            culinary experience you won’t forget!
          </h4>
        </div>
      </main>
      <main className={styles.main2}>
        <h2 className={styles.heading2}>
          Step Inside Hyderabad House: A Gallery
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
              href="https://www.google.com/maps?sca_esv=494940dbc25649b8&sca_upv=1&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiF2h5ZGVyYWJhZCBocHVzZSBtZW1waGlzMgcQABiABBgNMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yCBAAGAgYDRgeMgsQABiABBiGAxiKBTIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBEi3H1CPAliDHnABeAGQAQCYAeUBoAGmC6oBBTAuNy4xuAEDyAEA-AEBmAIJoAL0C8ICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIOEAAYsAMY5AIY1gTYAQHCAhkQLhiABBiwAxhDGMcBGMgDGIoFGK8B2AECwgINEC4YgAQYxwEYDRivAcICBxAuGIAEGA3CAgkQABiABBgKGA3CAgYQABgNGB6YAwDiAwUSATEgQIgGAZAGE7oGBggBEAEYCboGBggCEAEYCJIHBTEuNi4yoAfgSA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KUnjGA3lmX-IMXdFa7nl3mVz&daddr=3675+Southwind+Park+Cove+Ste+105,+Memphis,+TN+38125,+United+States"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                3675 Southwind Park Cove, Suite 105 , Tennessee, TN - 38125
              </strong>
            </a>
          </h4>
          <h4 className={styles.description2}>
            <strong>Opening Hours: </strong>
            <br />
            <br />
            9:30 AM - 9.00 PM
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
            <strong>Email : info@hb-memphis.com </strong>
          </h4>
          <h4 className={styles.description2} style={{ color: "white" }}>
            <strong>Phone no.: (901) 425-4873 </strong>
          </h4>
          <h4 className={styles.description2} style={{ color: "white" }}>
            <a
              href="https://www.hb-memphis.com/Menu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> Menu : hb.com/menu</strong>
            </a>
          </h4>
          <h4 className={styles.description2} style={{ color: "white" }}>
            <a
              href="https://www.hb-memphis.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> Website: hb.com</strong>
            </a>
          </h4>
        </div>
      </main>
    </>
  );
}
