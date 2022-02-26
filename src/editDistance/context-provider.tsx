import React, { useState, useContext } from "react";
import { ErrorGroup } from "./types";
import editDistance from "./algorithm";

const _editDistance = (
  genStr: string,
  expStr: string
): Promise<Array<ErrorGroup>> =>
  new Promise((resolve, reject) => {
    resolve(editDistance(genStr, expStr));
  });

type ContextResult = [
  (genStr: string, expStr: string) => void,
  {
    result: Array<ErrorGroup>;
    isLoading: boolean;
  }
];
const EditDistanceContext = React.createContext<ContextResult | undefined>(
  undefined
);

export const EditDistanceProvider: React.FC = ({ children }) => {
  const [result, setResult] = useState<Array<ErrorGroup>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const trigger = (genStr: string, expStr: string) => {
    setIsLoading(true);
    _editDistance(genStr, expStr)
      .then((r) => setResult(r))
      .finally(() => setIsLoading(false));
  };

  return (
    <EditDistanceContext.Provider value={[trigger, { result, isLoading }]}>
      {children}
    </EditDistanceContext.Provider>
  );
};

export const useEditDistance = () => {
  const context = useContext(EditDistanceContext);

  if (context === undefined) {
    throw new Error("useEditDistance must be used in the EditDistanceProvider");
  }

  return context;
};
