import { ErrorGroup } from "functional_edit_distance/build/src/types";
import React from "react";
import styled from "styled-components";
import { useEditDistance } from "../../../../context/EditDistanceProvider";

const findHighlightColor = (operation: string, output: "gen" | "exp") => {
  switch (operation) {
    case "insert":
      return output === "gen" ? "green" : "red";

    case "delete":
      return output === "gen" ? "red" : "green";

    case "replace":
      return "yellow";

    default:
      return "none";
  }
};

const Container = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 600px;
`;

const Highlight = styled.span<{ color: string }>`
  background-color: ${({ color }) => color};
`;

type Props = {
  output: "gen" | "exp";
};

const Display: React.FC<Props> = ({ output }) => {
  const { genString, expString, result } = useEditDistance();

  const resultString = output === "gen" ? genString : expString;

  console.log("Results", result);

  const highlightResult = () => {
    if (!result || !resultString) return <></>;

    // let highlightedResult = <></>;

    // result.forEach((r) => {
    //   const indicies = output === 'gen' ? r.genIndices : r.expIndices;
    //   const startIdx = indicies[0];
    //   const endIdx = indicies[indicies.length - 1];
    //   const highlightColor = findHighlightColor(r.operation, output);

    //   highlightedResult = (
    //     <>
    //       {highlightedResult}
    //       {resultString.slice(0, startIdx)}
    //       <Highlight color={highlightColor}>
    //         {resultString.slice(startIdx, endIdx + 1)}
    //       </Highlight>
    //     </>
    //   );
    // });
    let offset = 0;
    const highlight = result.reduce((acc, cur, idx, arr) => {
      const startErrIdx = (idx === 0 ? 0 : arr[idx - 1].endIndex) + offset;
      const prefix = resultString.slice(startErrIdx, cur.startIndex); // t
      const errorString =
        cur.operation === "insert"
          ? cur.errorString
          : `${resultString.slice(cur.startIndex, cur.endIndex)}`; // e

      console.log("opertatoin: ", cur.operation);
      if (cur.operation === "insert") {
        console.log("increment offset start: ", offset);
        offset += cur.errorString.length;
        console.log("increment offset end: ", offset);
      }

      console.log("error string: ", errorString, "offset: ", offset);

      const jsx = (
        <>
          {acc}
          {prefix}
          <Highlight color={findHighlightColor(cur.operation, output)}>
            {errorString}
          </Highlight>
        </>
      );

      // console.log(jsx);

      return jsx;
    }, <></>);

    const suffix = (
      <>
        {resultString.slice(
          result[result.length - 1].endIndex - offset,
          resultString.length
        )}
      </>
    );
    return (
      <>
        {highlight}
        {suffix}
      </>
    );
  };

  // const HighlightedResult = () => React.createElement(highlightResult());

  return <Container>{highlightResult()}</Container>;
};

export default Display;
