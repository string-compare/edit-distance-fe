import React, { useState } from "react";
import { StringEntry, StringResult } from "../";
import styles from "./Main.module.css";
import { useWebWorker } from "../../webworker/useWebworker";
import { ErrorGroup } from "functional_edit_distance/build/src/types";

function useEditDistance() {
  const worker = new Worker(
    new URL("../../webworker/workers/editDistance.worker.ts", import.meta.url)
  );
  return useWebWorker<
    { genString: string; expString: string },
    Array<ErrorGroup>
  >(worker);
}

export const Main = () => {
  const [genString, setGenString] = useState<string>();
  const [expString, setExpString] = useState<string>();
  const [trigger, { isLoading, result, error }] = useEditDistance();

  const handleOnSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (genString && expString) {
      trigger({ genString, expString });
    }
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
      <form className={styles.topForm} onSubmit={handleOnSubmit}>
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
        <div className={styles.submitContainer}>
          <input type="submit" value="Submit" className={styles.submit} />
        </div>
      </form>
      {result?.length ? (
        <>
          <div className={styles.leftBottom}>
            <StringResult title={"Generated Differences"} />
          </div>
          <div className={styles.rightBottom}>
            <StringResult title={"Expected Differences"} />
          </div>
        </>
      ) : isLoading ? (
        <div className={styles.loading}>Loading...</div>
      ) : null}
    </div>
  );
};
