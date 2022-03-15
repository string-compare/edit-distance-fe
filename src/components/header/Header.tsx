import React from "react";
import styles from "./Header.module.css";
import { useThemeProvider } from "../../theme/context-provider";

const Header: React.FC = () => {
  const [trigger, { mode }] = useThemeProvider();

  const handleClick = () => {
    trigger();
  };

  return (
    <section className={styles.header}>
      <h1>String Compare</h1>
      <label className={styles.switch}>
        <input type="checkbox" name="" id="" onClick={handleClick} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </section>
  );
};

export default Header;
