import {
  ErrorGroup,
  Operation,
} from "functional_edit_distance/build/src/types";

export const genString = "the bwn foxsa leaps over the bloom green turtle";
export const expString = "the brown fox leaps overas the green turtleqa";

const exampleGenStrHighlighted =
  "the b[ro - insert]wn fox[sa - delete] leaps over[as - insert] the[ bloom - delete] turtle[qa - insert]";

export type MockData = {
  genString: string;
  expString: string;
  errorGroup: Array<ErrorGroup>;
};

export const resultData: MockData = {
  genString,
  expString,
  errorGroup: [
    {
      errorString: "ro",
      startIndex: 5,
      endIndex: 7,
      expIndices: [5, 6],
      genIndices: [4],
      operation: Operation.INSERT,
    },
    {
      errorString: "sa",
      startIndex: 11,
      endIndex: 13,
      expIndices: [12],
      genIndices: [11, 12],
      operation: Operation.DELETE,
    },
    {
      errorString: "as",
      startIndex: 24,
      endIndex: 26,
      expIndices: [24, 25],
      genIndices: [23],
      operation: Operation.INSERT,
    },
    {
      errorString: " bloom",
      startIndex: 28,
      endIndex: 34,
      expIndices: [29],
      genIndices: [28, 29, 30, 31, 32, 33],
      operation: Operation.DELETE,
    },
    {
      errorString: "qa",
      startIndex: 43,
      endIndex: 45,
      expIndices: [43, 44],
      genIndices: [46],
      operation: Operation.INSERT,
    },
  ],
};
