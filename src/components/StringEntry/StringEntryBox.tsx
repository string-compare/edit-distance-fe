import React from "react";
import styles from "./StringEntryBox.module.css";
interface PropTypes {
  title: string;
}

export const StringEntryBox = (props: PropTypes) => {
  return (
    <section className={styles.stringEntryContainer}>
      <h3>{props.title}</h3>
      <input
        type="text"
        placeholder="Enter a string"
        className={styles.stringEntryBox}
      />
    </section>
  );
};
