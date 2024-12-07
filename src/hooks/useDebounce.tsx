import { useRef, useCallback } from "react";

const useDebounce = () => {
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debounce = useCallback((func: () => void, delay: number) => {
    return () => {
      timeout.current && clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        func();
        timeout.current = null;
      }, delay);
    };
  }, []);

  return { debounce };
};

export default useDebounce;
