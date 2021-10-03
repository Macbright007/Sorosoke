import React from "react";
import styles from "../styles/main.module.css";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className={styles.side_nav}>
      <Image
        src="/images/Ellipse.png"
        alt="Vercel Logo"
        width={5500}
        height={5500}
      />
      <p className={styles.paragraph}>Hi! Esther 👋</p>

      <div className={styles.sidebar_nav}>
        <Link href="/heroSection/main">
          <a className={styles.link}>Feed</a>
        </Link>
        <Link href="/heroSection/chat">
          <a className={styles.link}>
            <i class="bi bi-messenger" style={{ marginRight: 10 }}></i> Chat
            Rooms
          </a>
        </Link>
      </div>

      <p className={styles.head3}>
        <i class="bi bi-box-arrow-right"></i>Log Out
      </p>
    </div>
  );
};

export default Sidebar;
