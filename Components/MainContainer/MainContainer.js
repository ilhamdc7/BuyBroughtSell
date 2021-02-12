import React from "react";
import styles from "./MainContainer.module.css";

const MainContainer = () => {
  return (
    <div className={styles.headContainer}>
      <div className={styles.largeCard}></div>

      <div className={styles.mediumContainer}>
        <div className={styles.mediumCard}></div>

        <div className={styles.smallestCard}></div>

        <div className={styles.smallCard}></div>
      </div>
    </div>
  );
};

export default MainContainer;
