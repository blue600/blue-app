import { Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './main-menu/AppBar.jsx';
import HomeIcon from '@mui/icons-material/Home';
import { Login } from './login/Login.jsx';

// const BlueGrid = styled.div`
//   width: 100%;
//   padding: 20px;
//   border: 5px red solid;
//   margin: auto;
//   display: flex;
//   justify-content: space-around;
// `;

const App = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<HomeIcon />} />
        <Route path='*' element={<HomeIcon />} />
        <Route path='/login' element={<Login />} />
        <Route path='/homeunlogin' element={<HomeUnLogin />} />
      </Routes>
    </>
  );
};

export default App;
