import React, { useContext, useState } from "react";

type ThemeResult = [
  () => void,
  {
    mode: "light" | "dark";
  }
];

const ThemeContext = React.createContext<ThemeResult>([
  () => {},
  {
    mode: "dark",
  },
]);

const ThemeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const trigger = () => {
    setMode(() => (mode === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={[trigger, { mode }]}>
      {children}
    </ThemeContext.Provider>
  );
};
