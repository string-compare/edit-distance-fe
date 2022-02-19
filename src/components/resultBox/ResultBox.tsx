import React from "react";
import "./ResultBox.css";

interface PropTypes {
  title: string;
}

export const ResultBox = (props: PropTypes) => {
  return (
    <div className="resultContainer">
      <h3>{props.title}</h3>
      <div className="resultBox"></div>
    </div>
  );
};
