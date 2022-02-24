import React from "react";
import styles from "./StringResultDisplay.module.css";

const StringResultDisplay: React.FC = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default StringResultDisplay;
