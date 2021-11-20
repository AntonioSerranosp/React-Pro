import { useState } from "react";
/**
 *
 * @returns a counter & a function that lets increase o decrease the counter
 */
export const useProduct = () => {
  const [counter, setCounter] = useState(0);
  const increaseBy: (value: number) => void = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };

  return {
    counter,
    increaseBy,
  };
};
