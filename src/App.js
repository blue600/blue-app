import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { UsersFetched } from './blue-components/UsersFetched';

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
    <div>
      <BlueGrid>
        <Button variant='outlined' size='large'>
          mui-button
        </Button>
      </BlueGrid>
      <UsersFetched />
    </div>
  );
};

export default App;
