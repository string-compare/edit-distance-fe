import { edit_distance } from "functional_edit_distance";
import { ErrorGroup } from "functional_edit_distance/build/src/types";

const editDistance = (
  genStr: string,
  expStr: string
): Promise<Array<ErrorGroup>> =>
  new Promise((resolve, reject) => {
    resolve(edit_distance(genStr, expStr));
  });

onmessage = function (event) {
  const { genString, expString } = JSON.parse(event.data);
  editDistance(genString, expString).then(async (response) => {
    const result = await JSON.stringify(response);
    postMessage(result);
  });
};

export {};
