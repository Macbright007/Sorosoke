import React from "react";
import Image from "next/image";
import styles from "../../styles/Chat.module.css";
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
        <p className={styles.paragraph}>Hi! Esther</p>

        <Link href="/heroSection/main">
          <p className={styles.head1}>Feed</p>
        </Link>
        <p className={styles.head2}><i class="bi bi-messenger"></i>Chat Rooms</p>
        <p className={styles.head3}><i class="bi bi-box-arrow-right"></i>Log Out</p>
      </div>

      <div className={styles.container}>
        <h1 className={styles.heading}>Chat Rooms</h1>
        <div className={styles.sub}>
          <p className={styles.text}>
            Connect with people in your city and beyond. Chat about the
            mobement and protests.Let's end police brutality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default main;
