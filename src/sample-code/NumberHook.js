import { useNumber } from './hooks';
import React from 'react';

export const NumberHook = () => {
  const [count, One, Two, Three] = useNumber();
  return (
    <div>
      <h2> {count} </h2>
      <button onClick={One}> One </button>
      <button onClick={Two}> Two </button>
      <button onClick={Three}> Three </button>
    </div>
  );
};
