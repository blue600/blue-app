import { useState } from 'react';

export const useNumber = () => {
  const [count, setCount] = useState(0);
  const One = () => setCount(1);
  const Two = () => setCount(2);
  const Three = () => setCount(3);
  return [count, One, Two, Three];
};
