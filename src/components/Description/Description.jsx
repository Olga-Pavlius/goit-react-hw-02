import React from "react";
import styles from "./Description.module.css";

const Description = () => {
  return (
    <div className={styles.descriptionContainer}>
      <p className={styles.descriptionText}>
        Please leave your feedback about our service by selecting one of the options below.
      </p>
    </div>
  );
};

export default Description;