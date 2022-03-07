import React, { useState } from "react";
import { ErrorGroup } from "./types";

type TriggerParameters = [
  (genStr: string, expStr: string) => void,
  {
    result: Array<ErrorGroup>;
    isLoading: boolean;
    error: string | null;
  }
];

export const useEditDistance = (): TriggerParameters => {
  const [result, setResult] = useState<Array<ErrorGroup>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const trigger = (genStr: string, expStr: string) => {
    // Create and start the worker
    const worker: Worker = new Worker(
      new URL("../webworker/webworker.ts", import.meta.url)
    );

    const webMessage = JSON.stringify({ genStr, expStr });

    worker.postMessage(webMessage);

    worker.onmessage = (e) => {
      const response = JSON.parse(e.data);
      setResult(response);
      setIsLoading(false);
    };

    worker.onerror = (e) => {
      setError(e.message);
    };
  };

  return [trigger, { result, isLoading, error }];
};
