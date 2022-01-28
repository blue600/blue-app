import { useState, useEffect } from 'react';

export const UsersFetched = () => {
  const [data, setData] = useState([{}]);
  const URL = 'http://localhost:3500/users';
  const fetchData = async () => {
    const res = await fetch(URL, { method: 'GET' });
    const dataLocal = await res.json();
    setData(dataLocal);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data.map(({ id, userName, phoneNumber }) => (
          <li key={id}>
            {id} . {userName} {phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};
