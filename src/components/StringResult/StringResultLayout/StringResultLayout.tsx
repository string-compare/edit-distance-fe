import React from "react";
import styles from "./StringResultLayout.module.css";

const StringResultLayout: React.FC = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default StringResultLayout;
