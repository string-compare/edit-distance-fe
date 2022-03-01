import styles from "./Sidebar.module.css";
import { useThemeProvider } from "../../theme/context-provider";

export const Sidebar = () => {
  const [trigger, { mode }] = useThemeProvider();

  const handleClick = () => {
    trigger();
  };

  return (
    <div className={styles.sidebar}>
      <label className={styles.switch}>
        <input type="checkbox" name="" id="" onClick={handleClick} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};
