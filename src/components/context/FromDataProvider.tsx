import React, { useContext, useState } from "react";

type FDContext = {
  genString: string | undefined;
  expString: string | undefined;
  setGenString: React.Dispatch<React.SetStateAction<string | undefined>>;
  setExpString: React.Dispatch<React.SetStateAction<string | undefined>>;
};
const FormDataContext = React.createContext<FDContext | undefined>(undefined);

const FormDataProvider: React.FC = ({ children }) => {
  const [genString, setGenString] = useState<string | undefined>();
  const [expString, setExpString] = useState<string | undefined>();

  return (
    <FormDataContext.Provider
      value={{ genString, setGenString, expString, setExpString }}
    >
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => {
  const context = useContext(FormDataContext);

  if (context === undefined) {
    throw new Error("useThemeProvider must be used in the ThemeProvider");
  }

  return context;
};
