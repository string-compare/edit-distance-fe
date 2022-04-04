import React from 'react';
import TwoColLayout from '../../../layouts/TwoColLayout';
import { useEditDistance } from '../../../context/EditDistanceProvider';
import Display from './components/Display';

const ResultDisplay: React.FC = () => {
  const { genString, expString, result } = useEditDistance();
  return (
    <TwoColLayout
      left={<Display output="gen" />}
      right={<Display output="exp" />}
    />
  );
};

export default ResultDisplay;
