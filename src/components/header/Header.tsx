import React from "react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <section className={styles.header}>
      <h1>It's Levenshtein... String Diff</h1>
    </section>
  );
};
