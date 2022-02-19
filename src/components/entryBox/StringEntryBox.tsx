import React from "react";
import "./StringEntryBox.css";
interface PropTypes {
  title: string;
}

export const StringEntryBox = (props: PropTypes) => {
  return (
    <section className="stringEntryContainer">
      <h3>{props.title}</h3>
      <input
        type="text"
        placeholder="Enter a string"
        className="stringEntryBox"
      />
    </section>
  );
};
