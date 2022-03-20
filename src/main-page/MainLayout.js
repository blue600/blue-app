import { Layout, Breadcrumb } from 'antd';
import MenuBar from './MenuBar';
import { Routes, Route } from 'react-router-dom'; // 引入Client端路由模块，参见笔记
import { Login } from '../user-login/Login.jsx';
import { HomeUnLogin } from '../sample-code/HomeUnLogin.jsx';
import { NumberHook } from '../sample-code/NumberHook';
import Users from '../user-login/Users';
import Hello from '../sample-code/Hello';

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Layout className='layout'>
      <Header>
        <MenuBar />
      </Header>
      <Content style={{ padding: '0 50px', background: '#202020' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='*' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/hello' element={<Hello />} />
          <Route path='/user' element={<Users />} />
          <Route path='/homeunlogin' element={<HomeUnLogin />} />
          <Route path='/numberhook' element={<NumberHook />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        blue600.com ©2022 版权所有
      </Footer>
    </Layout>
  );
};

export default MainLayout;
