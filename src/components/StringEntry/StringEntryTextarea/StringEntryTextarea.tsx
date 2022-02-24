import React from "react";
import styles from "./StringEntryTextarea.module.css";

type Props = {
  placeholder: string;
};

const StringEntryTextarea: React.FC<Props> = ({ placeholder }) => (
  <textarea placeholder={placeholder} className={styles.textarea} />
);

export default StringEntryTextarea;
