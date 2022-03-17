import { useState, useEffect } from 'react';

const User = () => {
  const [data, setData] = useState([{}]);
  const URL = 'http://localhost:3500/user';
  
  const fetchData = async () => {
    const res = await fetch(URL, { method: 'GET' });
    const data_GET = await res.json();
    setData(data_GET);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data.map(({ user_id, user_name }) => (
          <li key={user_id}>
            {user_id} . {user_name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default User;
