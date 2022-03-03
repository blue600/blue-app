# blue-app-design

- 2022年一季度时间紧，暂时不开发UI

- 前端先开发一个通用的GET/POST模块，用于CRUD后端数据库

- 先，边做odoo财务模块实施，边开发财务后端Model

# blue-server-design

当前任务清单：

- 首先，把整个通道打通，不要把面铺开了。求纵深，不拉长战线。因为代码质量不好，或者设计不合理，太多重新设计不划算。

- 业务学习归学习，不要急于开发。以后改代码会浪费很多时间。先只做会计分录模块，深入研究业务。订单以及集成暂时放下。

- 认证模块，学习HTTP认证机制，抽时间学习❗️

- 授权模块

# blue-app 架构设计

## index.js - App.js 启动入口

- 从 index.js 开始加载：`npm start`自动加载index.js

- 先装载 root 根组件 App.js

- 再由App 组件装载其他组件

## public 目录

- 静态文件目录

- 

## react-router-dom

- 参见：[React Router Tutorial - 3 - Configuring Routes - YouTube](https://youtu.be/09dh_T-ZHl0)

- 客户端路由模块，主要方便“菜单项链接目标组件”，不需要自己写算法

```javascript
//1. index.js 文件变化
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


//2. App.js 文件变化
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/home' element={<HomeIcon />} />
        <Route path='/abc' element={<AbcIcon />} />
      </Routes>
    </>
  );
};
```

## 命名规范

- 名词全部用单数，动词全部用原型。咱中国人实在是容易搞混乱这些变化，干脆都不变。

- 变量名：驼峰命名。如，objUserName

- 类名：Pascal命名。如，UserName

- react组件文件名：与类名一致，Pascal命名。如，UserLogin

- 一般文件夹/文件名：全小写，用中间划线连接。如，users-model.js

# 第一步 创建应用模版✅

- 不启用 Typescript模式

- 采用mui作为UI组件

## 创建react 应用模版

- 详细见 react-notes、react-notes-mui

```shell
$ npm install create-react-app 
$ npx create-react-app blue-app
```

## 使用mui组件

- 任何react component 都可以理解为是一个组件函数生成的（新版本不再建议使用类组件）

- 任何UI Library，material UI也好，Chakra UI也好，本质上都是一套设计美观的组件函数库

- 是函数就有输入和输出，正是通过输入来实现interpolation，通过return输出JSX组件描述脚本，供react框架render出组件UI

```javascript
// 引入mui组件库
import { Button } from '@mui/material';


const App = () => {
  return (
      // App作为父组件，调用（既然是函数，可以叫call）子组件 Button
      // variant='outlined' size='large'，就是输入，都会打包成一个javascript对象传给 Button函数
      // {variant:'outlined',size:'large'}对象被传入Button函数，通常叫props对象
      <Button variant='outlined' size='large'> mui-button </Button>
  );
};

export default App;
```

- 一般情况下，变化这些输入参数（也就是组件函数的API）能获得需要的组件变体，不需要自己设计（配色很难！）

# ## 本节 npm install组件清单

```shell
# mui
npm install @mui/material @emotion/react @emotion/styled
```

# 第二步 主菜单

- 参考：[Material UI React Tutorial | Material UI Responsive Project - YouTube](https://youtu.be/lKZiXQWnlUw)

- 采用MUI的 AppBar - ResponsiveAppBar 样例代码

- 根据用户是否登录以及登录后的角色权限，来决定显示哪些菜单项（功能）
  
  - 一方面，是某种程度的权限控制
  
  - 作为客户端更主要的是，提升用户体验，不需要的没有权限的就不要显示出来干扰注意力。

# 第N步 读取 blue-server API 数据

- 在react框架下并没有裸的函数可以调用，在react的世界里只有components

- 也就是说不可能定义一个读取blue-server api的函数，然后调用它。只能定义一个component，通过这个组件的render + useEffect机制来触发数据读取函数。

## fetch读取数据

```javascript
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
```

## return展现数据

- 对象数组一般用map函数映射成 JSX

```javascript
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
```

# 票据打印

- 研究一下以下模块：
  
  - react-to-print 
  
  - pdfjs-dist

# 三阶段个性化架构

- 不同的个性化需求，合理地放进三个不同的个性化阶段
  
  - Dev，代码开发阶段，实现主要的个性化需求，比如，不同国家的版本、不同行业的版本
  
  - Conf，专业人员配置阶段，比如，认证会计师配置COA编码
  
  - Admin/User，应用管理员和用户自己的个性化配置，比如，将用户加入不同的角色用户组

- 总的原则是：与业界过去的做法反向而行，不要让实施团队和用户去做复杂的配置设计，要尽量控制Conf和Admin阶段的个性化，让用户傻瓜式使用。

- 不要努力一套代码解决所有个性化需求，这会让架构变得非常复杂。可以有一套基础代码，个性化版本修改相应的代码就可以了。这是我这个主架构师最最需要积累的经验！

# 其它信息

## npm 安装的依赖包

```shell
# 
$ npm install react-router-dom
```

# Style风格方案

- @emotion/styled 没有发现特别的收益

- 继续使用CSS文件定义 style

## 运用@emotion/styled

- @emotion/styled 基本是参照 styled-components 设计的，语法都是一样的。

- mui老版本 makestyle方案将废弃。设计的基本思路是变体还不能满足要求，就用makestyle继续客制化mui组件。形成新一代儿子组件。

- @emotion/styled 的设计思路是创建个性化的container（比如，
  
  ）包含需要进一步客制化的mui组件，注入新的属性定义。

```javascript
// styled component方案，目前我并没有发现有太大的收益
// 使用传统的CSS文件反而直观，容易理解
// 目前方案是：在每一个模块建立一个同名的CSS文件
import { styled } from '@mui/system';

export const BLink = styled('div')({
  fontWeight: 'bold',
  color: 'white',
  textDecorationLine: 'none',
});
```

## CSS文件 + react 的 classname方案

```javascript
// 1. 在 login.css 文件中定义
.bluecolor {
  color: blue;
}


// 2. 通过className在jsx里面引用，Mui组件也继承了react的className方式
export const Login = () => {
  return (
    <>
      <Typography className='bluecolor'>Login page</Typography>
      <p className='bluecolor'> bluecolor text </p>
    </>
  );
};
```
