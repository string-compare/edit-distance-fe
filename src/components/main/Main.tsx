import React from "react";
import { StringEntryBox } from "../entryBox/StringEntryBox";
import { ResultBox } from "../resultBox/ResultBox";
import "./Main.css";

export const Main = () => {
  return (
    <div className="main">
      <div className="leftTop">
        <StringEntryBox title={"Generated String"} />
      </div>
      <div className="rightTop">
        <StringEntryBox title={"Expected String"} />
      </div>
      <div className="leftBottom">
        <ResultBox title={"Generated Differences"} />
      </div>
      <div className="rightBottom">
        <ResultBox title={"Expected Differences"} />
      </div>
    </div>
  );
};
