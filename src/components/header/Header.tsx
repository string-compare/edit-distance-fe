import React from "react";

export const Header = () => {
  return (
    <div className="header">
      <h1>Welcome to Edit Distance</h1>
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
    </div>
  );
};
