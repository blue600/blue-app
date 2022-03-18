import axios from '../config/axios.js';
import AuthContext from './AuthProvider.js';
import { useContext } from 'react';

const useRefreshToken = () => {
  const { setAuth } = useContext(AuthContext);

  const refresh = async () => {
    // console.log('getting refreshToken ...');

    try {
      const response = await axios.get('/accessTokenRefresh', {
        withCredentials: true,
      });
      // console.log('/accessTokenRefresh...response', response);
      setAuth(prev => {
        // console.log('prev...', JSON.stringify(prev));
        // console.log(response.data.accessToken);
        return { ...prev, accessToken: response.data.accessToken };
      });
      return response.data.accessToken;
    } catch (error) {
      console('refreshToken error...', error);
    }
  };
  return refresh;
};

export default useRefreshToken;
