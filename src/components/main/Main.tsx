import React from "react";
import { StringEntryBox } from "../entryBox/StringEntryBox";
import { ResultBox } from "../resultBox/ResultBox";
import styles from "./Main.module.css";

export const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.leftTop}>
        <StringEntryBox title={"Generated String"} />
      </div>
      <div className={styles.rightTop}>
        <StringEntryBox title={"Expected String"} />
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
