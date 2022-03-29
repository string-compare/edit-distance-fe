import React, { useState } from "react";
import styled from "styled-components";
import TwoColLayout from "../layouts/TwoColLayout";
import { Button } from "../shared";
import { StringEntry } from "./components/InputDisplay/components/StringEntry";
import { ResultDisplay } from "./components";
import InputDisplay from "./components/InputDisplay/InputDisplay";
import useEditDistance from "./useEditDistance";
import { resultData, MockData } from "../../mock";
import { ErrorGroup } from "functional_edit_distance/build/src/types";

type MockReturn = [
  (genString: string, expString: string) => void,
  {
    isLoading: boolean;
    result: Array<ErrorGroup>;
    error: string;
  }
];
const useMock = (resultData: Array<ErrorGroup>): MockReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [result, setResult] = useState<Array<ErrorGroup>>([]);

  const trigger = (genString: string, expString: string) => {
    setTimeout(() => setResult(resultData), 2000);
  };

  return [trigger, { isLoading, result, error }];
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const EditDistance: React.FC = () => {
  const { genString, expString, errorGroup } = resultData;
  // const [trigger, terminate, { isLoading, result, error }] = useEditDistance();
  const [trigger, { isLoading, result, error }] = useMock(errorGroup);

  return (
    <Container>
      {result && (
        <ResultDisplay
          result={result}
          genString={genString}
          expString={expString}
        />
      )}
      <InputDisplay trigger={trigger} />
    </Container>
  );
};

export default EditDistance;