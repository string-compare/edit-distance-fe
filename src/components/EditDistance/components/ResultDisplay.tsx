import React from "react";
import { ErrorGroup } from "functional_edit_distance/build/src/types";
import styled from "styled-components";
import TwoColLayout from "../../layouts/TwoColLayout";

const Display = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 600px;
`;

type Props = {
  result: Array<ErrorGroup>;
  genString: string;
  expString: string;
};
const ResultDisplay: React.FC<Props> = ({ result }) => {
  console.log("result: ", result);
  /*
    handle making new highlighted strings

  */
  
  return <TwoColLayout left={<Display>{result}} right={<Display />} />;
};

export default ResultDisplay;
