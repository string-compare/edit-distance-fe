import React, { useContext, useState } from "react";

type ThemeResult = [
  () => void,
  {
    mode: "appLight" | "appDark";
  }
];

const ThemeContext = React.createContext<ThemeResult | undefined>(undefined);

export const ThemeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<"appLight" | "appDark">("appDark");

  const trigger = () => {
    console.log("trigger, triggered");
    setMode(() => (mode === "appLight" ? "appDark" : "appLight"));
  };

  return (
    <ThemeContext.Provider value={[trigger, { mode }]}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeProvider = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useThemeProvider must be used in the ThemeProvider");
  }

  return context;
};
