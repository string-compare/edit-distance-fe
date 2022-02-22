import React from "react";
import styles from "./SectionLayout.module.css";

const SectionLayout: React.FC = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default SectionLayout;
