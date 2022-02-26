import React from "react";
import styles from "./StringEntryTextarea.module.css";

// extend textarea types
type Props = {
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const StringEntryTextarea: React.FC<Props> = ({
  placeholder,
  onChange,
  name,
}) => (
  <textarea
    placeholder={placeholder}
    className={styles.textarea}
    name={name}
    onChange={onChange}
  />
);

export default StringEntryTextarea;
