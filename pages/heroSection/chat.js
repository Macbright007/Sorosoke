import React from "react";
import Image from "next/image";
import styles from "../../styles/Chat.module.css";
import Link from "next/link";
import Layout from '../../components/Layout'
const main = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.heading}>Chat Rooms</h1>
        <div className={styles.sub}>
          <p className={styles.text}>
            Connect with people in your city and beyond. Chat about the
            mobement and protests.Let's end police brutality.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default main;
