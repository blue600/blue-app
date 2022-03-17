import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

export const HomeUnLogin = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>HomeUnLogin</div>
      <Button
        type='primary'
        variant='contained'
        onClick={() => navigate('/Login')}
      >
        Login First
      </Button>
    </>
  );
};
