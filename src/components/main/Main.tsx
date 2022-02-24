import React from "react";
import { StringEntry, StringResult } from "../";
import styles from "./Main.module.css";

export const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.leftTop}>
        <StringEntry title={"Generated String"} />
      </div>
      <div className={styles.rightTop}>
        <StringEntry title={"Expected String"} />
      </div>
      <div className={styles.leftBottom}>
        <StringResult title={"Generated Differences"} />
      </div>
      <div className={styles.rightBottom}>
        <StringResult title={"Expected Differences"} />
      </div>
    </div>
  );
};
