import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <section className="footer">
      <h3>
        Authors:{" "}
        <a href="https://github.com/cerebrium" target="_blank">
          Nick Shankland
        </a>{" "}
        &&{" "}
        <a href="https://github.com/thewordisbird" target="_blank">
          Justin Bird
        </a>
      </h3>
    </section>
  );
};
