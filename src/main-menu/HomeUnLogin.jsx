import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export const HomeUnLogin = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>HomeUnLogin</div>
      <Button
        disabled='true'
        variant='contained'
        onClick={() => navigate('/Login')}
      >
        Login First
      </Button>
    </>
  );
};
