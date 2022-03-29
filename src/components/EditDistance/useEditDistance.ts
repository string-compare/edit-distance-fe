import { ErrorGroup } from "functional_edit_distance/build/src/types";
import { useWebWorker } from "../../webworker/useWebworker";

function useEditDistance() {
  const worker = new Worker(
    new URL("../../webworker/workers/editDistance.worker.ts", import.meta.url)
  );

  return useWebWorker<
    { genString: string; expString: string },
    Array<ErrorGroup>
  >(worker);
}

export default useEditDistance;
