import React from "react";
import Image from "next/image";
import styles from "../../styles/main.module.css";
import Link from "next/link";

const main = () => {
  return (
    <div>
      <div className={styles.side_nav}>
        <Image
          src="/images/Ellipse.png"
          alt="Vercel Logo"
          width={5500}
          height={5500}
        />
        <p className={styles.paragraph}>Hi! Esther 👋</p>

        <p className={styles.head1}>Feed</p>
        <Link href="/heroSection/chat">
          <a className={styles.head2}><i class="bi bi-messenger"></i> Chat Rooms</a>
        </Link>

        <p className={styles.head3}><i class="bi bi-box-arrow-right"></i>Log Out</p>
      </div>

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
          <div>
            <Image
              src="/images/Rect.png"
              alt="Vercel Logo"
              width={255}
              height={167}
            />
            <div className={styles.imageFooter}>
                <div className={styles.imagetext} >
                  <Image
                    src="/images/Ellipse1.png"
                    alt="Vercel Logo"
                    width={23}
                    height={23}
                  />
                  <p className={styles.imageparagraph1}>Eniduro Shade Thrower</p>
                  </div>
                  <div className={styles.imagetext2}>
                    <p className={styles.imageparagraph2}>2hr Ago</p>
                  </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/Rect2.png"
              alt="Vercel Logo"
              width={255}
              height={167}
            />
          </div>
          <div>
            <Image
              src="/images/Rect3.png"
              alt="Vercel Logo"
              width={255}
              height={167}
            />
          </div>
          <div>
            <Image
              src="/images/Rect4.png"
              alt="Vercel Logo"
              width={255}
              height={167}
            />
          </div>
          <div>
            <Image
              src="/images/Rect5.png"
              alt="Vercel Logo"
              width={255}
              height={167}
            />
          </div>
          <div>
            <Image
              src="/images/Rect6.png"
              alt="Vercel Logo"
              width={255}
              height={167}
            />
          </div>
          <div>
            <Image
              src="/images/Rect7.png"
              alt="Vercel Logo"
              width={255}
              height={167}
            />
          </div>
          <div>
            <Image
              src="/images/Rect8.png"
              alt="Vercel Logo"
              width={255}
              height={167}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
