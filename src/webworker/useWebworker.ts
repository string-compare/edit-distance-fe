import { useEffect, useRef, useState } from "react";

type Result<P, D> = [
  (payload: P) => void,
  () => void,
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

  const workerRef = useRef<Worker>();

  useEffect(() => {
    console.log("setting worker");
    workerRef.current = worker;
  }, [workerRef]);

  const trigger = (payload: P) => {
    const webMessage = JSON.stringify(payload);
    setIsLoading(true);
    (workerRef.current as Worker).postMessage(webMessage);

    (workerRef.current as Worker).onmessage = (event) => {
      const response = JSON.parse(event.data);
      setResult(response);
      setIsLoading(false);
    };

    (workerRef.current as Worker).onerror = (err) => {
      setError(err.message);
    };
  };

  const terminate = () => {
    (workerRef.current as Worker).terminate();
    workerRef.current = undefined;
    setResult(undefined);
    setIsLoading(false);
    setError(null);
  };

  return [trigger, terminate, { result, isLoading, error }];
}
