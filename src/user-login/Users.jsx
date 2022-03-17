import { useState, useEffect } from 'react';
import useAxiosPrivate from './useAxiosPrivate.js';

const Users = () => {
  const _axiosPrivate = useAxiosPrivate();
  const [data, setData] = useState([{}]);

  const fetchData = async () => {
    try {
      console.log('fetchData...');
      console.log('_axiosPrivate...', _axiosPrivate);

      const options = {
        method: 'GET',
        // headers: { 'content-type': 'application/json' },
        url: '/user',
      };
      const res = await _axiosPrivate(options);
      console.log(res.data, 'fetched data ...');
      setData(res.data);
    } catch (error) {
      console.error('_axiosPrivate...error', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data.map(({ user_id, user_name }) => (
          <li key={user_id}>
            {user_id} 用户名: {user_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
