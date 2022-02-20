# blue-app-design

- 2022年一季度时间紧，暂时不开发UI

- 前端先开发一个通用的GET/POST模块，用于CRUD后端数据库

- 先，边做odoo财务模块实施，边开发财务后端Model

# 第一步 react + mui + @emotion/styled

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

## 运用@emotion/styled

- @emotion/styled 基本是参照 styled-components 设计的，语法都是一样的。

- mui老版本 makestyle方案将废弃。设计的基本思路是变体还不能满足要求，就用makestyle继续客制化mui组件。形成新一代儿子组件。

- @emotion/styled 的设计思路是创建个性化的container（比如，<div></div>）包含需要进一步客制化的mui组件，注入新的属性定义。

```javascript
import { Button } from '@mui/material';
import styled from '@emotion/styled';

const BlueDiv = styled.div`
  display: flex;
  width: 500px;
  padding: 0px;
  margin: 1px;
  justifycontent: center;
`;

const App = () => {
  return (
    <BlueDiv>
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
    </BlueDiv>
  );
};

export default App;
```

## 本节 npm install组件清单

```shell
# mui
npm install @mui/material @emotion/react @emotion/styled
```

# 第二步 读取 blue-server API 数据

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
