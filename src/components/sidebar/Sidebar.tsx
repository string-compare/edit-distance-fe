import React from "react";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <label className={styles.switch}>
        <input type="checkbox" name="" id="" />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};
