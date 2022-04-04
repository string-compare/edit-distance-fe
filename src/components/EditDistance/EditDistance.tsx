import React, { useState } from 'react';
import styled from 'styled-components';
import { ResultDisplay } from './components';
import InputDisplay from './components/InputDisplay/InputDisplay';
import { resultData } from '../../mock';
import { ErrorGroup } from 'functional_edit_distance/build/src/types';
import { useEditDistance } from '../context/EditDistanceProvider';

// type MockReturn = [
//   (genString: string, expString: string) => void,
//   {
//     isLoading: boolean;
//     result: Array<ErrorGroup>;
//     error: string;
//   }
// ];
// const useMock = (resultData: Array<ErrorGroup>): MockReturn => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<any>(null);
//   const [result, setResult] = useState<Array<ErrorGroup>>([]);

//   const trigger = (genString: string, expString: string) => {
//     setTimeout(() => setResult(resultData), 2000);
//   };

//   return [trigger, { isLoading, result, error }];
// };

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const EditDistance: React.FC = () => {
  const { result } = useEditDistance();
  return (
    <Container>
      {result && <ResultDisplay />}
      <InputDisplay />
    </Container>
  );
};

export default EditDistance;
