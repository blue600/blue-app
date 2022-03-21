import React from 'react';
import { useState, useEffect } from 'react';
import axios from '../config/axios.js';

const Hello = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: '/sayhi',
        };
        const res = await axios(options);
        setData(res.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return <div>`Hello from - {data} `</div>;
};

export default Hello;
