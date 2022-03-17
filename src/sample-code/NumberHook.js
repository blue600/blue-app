import { useNumber } from './hooks';
import React from 'react';
import { Button } from 'antd';

export const NumberHook = () => {
  const [count, One, Two, Three] = useNumber();
  return (
    <div>
      <h2> {count} </h2>
      <Button onClick={One}> One </Button>
      <Button onClick={Two}> Two </Button>
      <Button onClick={Three}> Three </Button>
    </div>
  );
};
