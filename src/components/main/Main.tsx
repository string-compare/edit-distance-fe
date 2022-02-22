import React from "react";
import { StringEntry } from "../StringEntry";
import { ResultBox } from "../StringResult/ResultBox";
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
        <ResultBox title={"Generated Differences"} />
      </div>
      <div className={styles.rightBottom}>
        <ResultBox title={"Expected Differences"} />
      </div>
    </div>
  );
};
