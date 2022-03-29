import React, { useState } from "react";
import TwoColLayout from "../../../layouts/TwoColLayout";
import { Button } from "../../../shared";
import { StringEntry } from "./components/StringEntry";
import { genString as gen, expString as exp } from "../../../../mock";

type Props = {
  trigger: (genString: string, expString: string) => void;
};
const InputDisplay: React.FC<Props> = ({ trigger }) => {
  const [genString, setGenString] = useState<string>(gen);
  const [expString, setExpString] = useState<string>(exp);

  const handleOnSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // if (isLoading) {
    //   terminate();
    //   return;
    // }
    if (genString && expString) {
      trigger(genString, expString);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    if (e.target.name === "genString") {
      setGenString(e.currentTarget.value);
    } else {
      setExpString(e.currentTarget.value);
    }
  };
  return (
    <TwoColLayout
      left={
        <StringEntry
          title="Generated String"
          name="genString"
          onChange={handleOnChange}
        />
      }
      right={
        <>
          <StringEntry
            title="Expected String"
            name="expString"
            onChange={handleOnChange}
          />
          <Button onClick={handleOnSubmit}>Find Differences</Button>
        </>
      }
    />
  );
};

export default InputDisplay;
