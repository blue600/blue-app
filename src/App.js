import { Routes, Route } from 'react-router-dom'; // 引入Client端路由模块，参加笔记
import ResponsiveAppBar from './main-page/AppBar.jsx';
import HomeIcon from '@mui/icons-material/Home';
import { Login } from './login/Login.jsx';
import { HomeUnLogin } from './main-page/HomeUnLogin.jsx';
import { NumberHook } from './sample-code/NumberHook';
import './App.css';
import MenuBar from './main-page/MenuBar.js';

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
      <MenuBar />
      {/* 对于复杂的App会不会这个路由清单太长了？ */}
      <Routes>
        <Route path='/' element={<HomeIcon />} />
        <Route path='*' element={<HomeIcon />} />
        <Route path='/login' element={<Login />} />
        <Route path='/homeunlogin' element={<HomeUnLogin />} />
        <Route path='/numberhook' element={<NumberHook />} />
      </Routes>
    </>
  );
};

export default App;
