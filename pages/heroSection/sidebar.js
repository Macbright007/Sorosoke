import React from "react";
import Image from "next/image";
import styles from "../../styles/Sidebar.module.css";

const sidebar = () => {
  return (
      <div className={styles.container}>
        <Image
          src="/images/Ellipse.png"
          alt="Vercel Logo"
          width={5000}
          height={5000}
        />
        <p className={styles.paragraph}>Hi! Esther</p>

        <p className={styles.head1} >Feed</p>
        <p className={styles.head2} >Chat Rooms</p>
        <p className={styles.head3} >Log Out</p>

      </div>
  );
};

export default sidebar;
