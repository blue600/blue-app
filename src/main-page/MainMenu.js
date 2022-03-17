import React from 'react';
import { useState } from 'react';
import { Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { menuItemL1, menuItemL2 } from '../config/menu-item.js';
import { Link } from 'react-router-dom';
import './style.css';

// 公共变量，包括 import { menuItemL1, menuItemL2 } ， 一级和二级菜单node 数组
const disableNode = ['0302']; // 无权限清单

const { SubMenu } = Menu;

/////////////////////////
const MainMenu = () => {
  const [selectedItemL1, setSelectedItemL1] = useState('');

  const handleClick = e => {
    setSelectedItemL1(e.key);
  };

  // ---- return JSX
  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[selectedItemL1]}
      mode='horizontal'
    >
      {menuItemL1.map(itemL1 => {
        let disableFlag = false;
        if (disableNode.includes(itemL1.code)) {
          disableFlag = true;
        }
        return (
          <SubMenu
            disabled={disableFlag}
            key={itemL1.code}
            title={itemL1.name}
            icon={<SettingOutlined />}
          >
            {menuItemL2
              .filter(itemL2 => itemL2.code.substring(0, 2) === itemL1.code)
              .map(item => {
                disableFlag = false;
                if (disableNode.includes(item.code)) {
                  disableFlag = true;
                }
                return (
                  <Menu.Item key={item.code} disabled={disableFlag}>
                    <Link className={'link'} to={item.route}>
                      {item.name}
                    </Link>
                  </Menu.Item>
                );
              })}
          </SubMenu>
        );
      })}
    </Menu>
  );
};

export default MainMenu;
