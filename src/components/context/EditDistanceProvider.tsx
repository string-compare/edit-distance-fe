import { ErrorGroup } from 'functional_edit_distance/build/src/types';
import React, { useContext, useState } from 'react';
import useEditDistanceWorker from '../EditDistance/useEditDistanceWorker';

type FDContext = {
  genString: string | undefined;
  expString: string | undefined;
  setGenString: React.Dispatch<React.SetStateAction<string | undefined>>;
  setExpString: React.Dispatch<React.SetStateAction<string | undefined>>;
  handleSubmit: () => void;
  result: ErrorGroup[] | undefined;
  isLoading: boolean;
  error: any;
};
const EditDistanceContext = React.createContext<FDContext | undefined>(
  undefined
);

const EditDistanceProvider: React.FC = ({ children }) => {
  const [genString, setGenString] = useState<string | undefined>();
  const [expString, setExpString] = useState<string | undefined>();

  const [trigger, terminate, { isLoading, result, error }] =
    useEditDistanceWorker();

  const handleSubmit = () => {
    if (!genString || !expString) return;

    trigger({ genString, expString });
  };

  return (
    <EditDistanceContext.Provider
      value={{
        genString,
        setGenString,
        expString,
        setExpString,
        handleSubmit,
        result,
        isLoading,
        error,
      }}
    >
      {children}
    </EditDistanceContext.Provider>
  );
};

export const useEditDistance = () => {
  const context = useContext(EditDistanceContext);

  if (context === undefined) {
    throw new Error('useThemeProvider must be used in the ThemeProvider');
  }

  return context;
};

export default EditDistanceProvider;
