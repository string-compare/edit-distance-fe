import { ErrorGroup } from "../editDistance/types";
import editDistance from "../editDistance/algorithm";

onmessage = function (e) {
  const _editDistance = (
    genStr: string,
    expStr: string
  ): Promise<Array<ErrorGroup>> =>
    new Promise((resolve, reject) => {
      resolve(editDistance(genStr, expStr));
    });
  const { genStr, expStr } = JSON.parse(e.data);
  _editDistance(genStr, expStr).then(async (response) => {
    const result = await JSON.stringify(response);
    postMessage(result);
  });
};

export {};
