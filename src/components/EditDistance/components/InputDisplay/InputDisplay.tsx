import React, { useState } from 'react';
import { useEditDistance } from '../../../context/EditDistanceProvider';
import TwoColLayout from '../../../layouts/TwoColLayout';
import { Button } from '../../../shared';
import { StringEntry } from './components/StringEntry';
// import { genString as gen, expString as exp } from '../../../../mock';

const InputDisplay: React.FC = () => {
  const { setGenString, setExpString, handleSubmit } = useEditDistance();

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    if (e.target.name === 'genString') {
      setGenString(e.currentTarget.value);
    } else {
      setExpString(e.currentTarget.value);
    }
  };
  return (
    <TwoColLayout
      left={
        <StringEntry
          title="Generated String"
          name="genString"
          onChange={(e) => handleOnChange(e)}
        />
      }
      right={
        <>
          <StringEntry
            title="Expected String"
            name="expString"
            onChange={(e) => handleOnChange(e)}
          />
          <Button onClick={handleSubmit}>Find Differences</Button>
        </>
      }
    />
  );
};

export default InputDisplay;
