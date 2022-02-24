import React, { useEffect, useState } from "react";
import { StringEntry, StringResult } from "../";
import styles from "./Main.module.css";
import { useEditDistance } from "../../editDistance/context-provider";

export const Main = () => {
  const [trigger, { isLoading, result }] = useEditDistance();
  const [genString, setGenString] = useState<string>();
  const [expString, setExpString] = useState<string>();

  const handleOnSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.name === "genString") {
      setGenString(e.currentTarget.value);
    } else {
      setExpString(e.currentTarget.value);
    }
  };

  return (
    <div className={styles.main}>
      <form>
        <div className={styles.leftTop}>
          <StringEntry
            name="genString"
            title={"Generated String"}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleOnChange(e)
            }
          />
        </div>
        <div className={styles.rightTop}>
          <StringEntry
            name="expString"
            title={"Expected String"}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleOnChange(e)
            }
          />
        </div>
        <input type="submit" value="Submit" onClick={handleOnSubmit} />
      </form>
      <div className={styles.leftBottom}>
        <StringResult title={"Generated Differences"} />
      </div>
      <div className={styles.rightBottom}>
        <StringResult title={"Expected Differences"} />
      </div>
    </div>
  );
};
