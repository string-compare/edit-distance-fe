import React from "react";
import styles from "./StringEntryLayout.module.css";

const StringEntryLayout: React.FC = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default StringEntryLayout;
