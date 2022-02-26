import React, { useContext, useState } from "react";

type ThemeResult = [
  () => void,
  {
    mode: "light" | "dark";
    style: {
      backgroundColor: string;
      color: string;
    };
  }
];

const ThemeContext = React.createContext<ThemeResult>([
  () => {},
  {
    mode: "dark",
    style: {
      backgroundColor: "#000",
      color: "#fff",
    },
  },
]);

export const ThemeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const [style, setStyle] = useState({
    backgroundColor: "#000",
    color: "#fff",
  });

  const trigger = () => {
    setMode(() => (mode === "light" ? "dark" : "light"));
    if (mode === "light") {
      setStyle({
        backgroundColor: "#fff",
        color: "#000",
      });
    } else {
      setStyle({
        backgroundColor: "#000",
        color: "#fff",
      });
    }
  };

  return (
    <ThemeContext.Provider value={[trigger, { mode, style }]}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeProvider = () => {
  const context = useContext(ThemeContext);

  return context;
};
