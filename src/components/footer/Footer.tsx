import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <h3>
        Authors:{" "}
        <a href="https://github.com/cerebrium" target="_blank">
          Nick Shankland
        </a>{" "}
        &&{" "}
        <a href="https://github.com/thewordisbird" target="_blank">
          Justin Bird
        </a>
      </h3>
    </section>
  );
};
