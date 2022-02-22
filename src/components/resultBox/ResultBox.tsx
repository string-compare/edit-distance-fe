import React from "react";
import styles from "./ResultBox.module.css";

interface PropTypes {
  title: string;
}

export const ResultBox = (props: PropTypes) => {
  return (
    <div className={styles.resultContainer}>
      <h3>{props.title}</h3>
      <div className={styles.resultBox}></div>
    </div>
  );
};
