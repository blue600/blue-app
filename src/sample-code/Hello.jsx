import React from 'react';
import { useState, useEffect } from 'react';

const Hello = () => {
  const [data, setData] = useState('');
  const fetchData = async () => {
    const res = await fetch('http://localhost:3500/', { method: 'GET' });
    console.log(res);
    const data_GET = await res.json();
    setData(data_GET);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div> This is {data}</div>;
};

export default Hello;
