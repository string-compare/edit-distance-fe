import React from "react";
import styles from "./Header.module.css";
import { useEditDistance } from "../../editDistance/context-provider";

export const Header = () => {
  const [trigger, { isLoading, result }] = useEditDistance();

  const handleOnClick = () => trigger;

  return (
    <section className={styles.header}>
      <h1>It's Levenshtein... String Diff</h1>
      <button onClick={handleOnClick}>Calculate</button>
    </section>
  );
};
