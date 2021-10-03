import React from "react";
import Image from "next/image";
import styles from "../../styles/main.module.css";
import Layout from "../../components/Layout";

const main = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.heading}>Feed</h1>
        <div className={styles.sub}>
          <p className={styles.text}>
            Here is a curation of all the latest news and updates about the
            public brutality movement.You can also contribute by uploading any
            information you have.
          </p>
          <a className={styles.btn}><i class="bi bi-cloud-arrow-up-fill"></i> Upload</a>
        </div>

        <div className={styles.events}>
          {
            [1, 2, 3, 4, 6, 7, 8, 9, 5, 7, 8, 2].map((item, key) => {
              return (
                <div className={styles.event_card} key={key}>
                  <Image
                    src="/images/Rect.png"
                    alt="Vercel Logo"
                    width={255}
                    height={167}
                  />
                  <div className={styles.event_card_footer}>
                    <div className={styles.footer_left} >
                      <Image
                        src="/images/Ellipse1.png"
                        alt="Vercel Logo"
                        width={23}
                        height={23}
                      />
                      <p>Eniduro Shade Thrower</p>
                    </div>
                    <div className={styles.footer_right}>
                      <p>2hr Ago</p>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </Layout>
  );
};

export default main;
