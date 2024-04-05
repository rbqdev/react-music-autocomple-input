import { useCallback, useEffect } from "react";

export default function useDebounce(
  func: () => void,
  delay: number,
  deps: React.DependencyList
): void {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(func, deps);

  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);
}
