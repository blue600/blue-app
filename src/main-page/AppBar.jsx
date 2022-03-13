import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import './style.css';
import { menuNodeL1, menuNodeL2 } from './menu-item.js';

// 公共变量，包括 import { menuNodeL1, menuNodeL2 } ， 一级和二级菜单node 数组
const disableNode = ['0202', '0302']; // 无权限清单
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']; // user菜单项

const ResponsiveAppBar = () => {
  //🍎 最右边 user 按钮
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget); // 打开、关闭响应函数
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //🍎 电脑版菜单处理函数
  const [anchorMenuC, setAnchorMenuC] = React.useState(null); // 菜单位置
  const [MenuCNode, setMenuCNode] = React.useState([]); // 二级菜单node节点数组
  const closeMenuC = () => {
    setAnchorMenuC(null); // 关闭菜单函数
  };
  const openMenuC = (event, code) => {
    setMenuCNode(
      menuNodeL2.filter(node => node.code.substring(0, 2) === code) // 按钮点击响应，打开菜单函数
    );
    if (MenuCNode.length === 0) {
      setAnchorMenuC(null);
    } else {
      setAnchorMenuC(event.currentTarget);
    }
  };
  // ====================================== JSX ==================================
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* 电脑版：左边域名ypography */}
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <NavLink className={'navlink'} to='/homeunlogin'>
              blue600.com
            </NavLink>
          </Typography>
          {/* 🍎手机版：汉堡包按钮 Box */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              // onClick={} // 手机版：点击汉堡包图标，弹出一级菜单
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
          </Box>
          {/* 手机版：居中域名 Typography */}
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <NavLink className={'navlink'} to='/home'>
              blue601.com
            </NavLink>
          </Typography>
          {/* 🍎电脑版：在蓝色AppBar背景上显示一级菜单按钮 Box */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuNodeL1.map(node => {
              let disableFlag = false;
              if (disableNode.includes(node.code)) {
                disableFlag = true; //无权限菜单项变灰
              }
              return (
                <Button
                  disabled={disableFlag}
                  key={node.code}
                  onClick={event => openMenuC(event, node.code)}
                  onClose={closeMenuC}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {node.name}
                </Button>
              );
            })}
          </Box>
          {/* 电脑版：弹出菜单 */}
          <Menu
            id='menu-computer'
            anchorEl={anchorMenuC} // anchor 在被点击的 HTML element 周边
            anchorOrigin={{
              // anchor 的位置点
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={Boolean(anchorMenuC)}
            onClose={closeMenuC}
            // onMouse ={closeMenuC}
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            {MenuCNode.map(node => {
              let disableFlag = false;
              if (disableNode.includes(node.code)) {
                disableFlag = true;
              }
              return (
                <MenuItem disabled={disableFlag} key={node.name}>
                  <Typography textAlign='center'>
                    <Link className={'link'} to={node.route}>
                      {node.name}
                    </Link>
                  </Typography>
                </MenuItem>
              );
            })}
          </Menu>
          {/* 🍎显示最右边用户设置按钮 */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(setting => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
