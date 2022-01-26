import { Button } from '@mui/material';
import styled from '@emotion/styled';

const BlueGrid = styled.div`
  width: 100%;
  padding: 20px;
  border: 5px red solid;
  margin: auto;
  display: flex;
  justify-content: space-around;
`;

const App = () => {
  return (
    <BlueGrid>
      <Button variant='outlined' size='large'>
        {' '}
        mui-button1{' '}
      </Button>
      <Button variant='outlined' size='large'>
        {' '}
        mui-button2{' '}
      </Button>
      <Button variant='outlined' size='large'>
        {' '}
        mui-button3{' '}
      </Button>
    </BlueGrid>
  );
};

export default App;
