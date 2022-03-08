import { useState } from "react";

type Result<P, D> = [
  (payload: P) => void,
  {
    result: D | undefined;
    isLoading: boolean;
    error: string | null;
  }
];

export function useWebWorker<P, D>(worker: Worker): Result<P, D> {
  const [result, setResult] = useState<D | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const trigger = (payload: P) => {
    const webMessage = JSON.stringify(payload);
    setIsLoading(true);
    worker.postMessage(webMessage);

    worker.onmessage = (event) => {
      const response = JSON.parse(event.data);
      setResult(response);
      setIsLoading(false);
    };

    worker.onerror = (err) => {
      setError(err.message);
    };
  };

  return [trigger, { result, isLoading, error }];
}
