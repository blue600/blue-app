// 查询数据库中所有用户的组件，用于测试，暂时没有实际用途
// 将来可以改造为，查询某一家公司的所有用户页面

import { useState, useEffect } from 'react';
import useAxiosPrivate from './useAxiosPrivate.js';
// import axios from '../config/axios';
// import useAxiosJWT from './useAxiosJWT';
import useRefreshToken from './useRefreshToken';

const Users = () => {
  // const refresh = useRefreshToken();
  const axiosPrivate = useAxiosPrivate();

  const [data, setData] = useState([{}]);
  // const [retry, setRetry] = useState(2);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: '/user',
          withCredentials: true,
        };
        const res = await axiosPrivate(options);
        // console.log('users data ...', res.data);
        setData(res.data);
      } catch (error) {
        console.error('axiosJWT...error', error);
        // refresh();
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data.map(({ user_id, user_name }) => (
          <li key={user_name}>
            {user_id} 用户名: {user_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
