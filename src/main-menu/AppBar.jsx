import * as React from 'react';
import { NavLink } from 'react-router-dom';
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

const disableNode = [];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorMenuL1, setAnchorMenuL1] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorMenuL2, setAnchorMenuL2] = React.useState(null);
  const [selectedMenuL1Index, setSelectedMenuL1Index] = React.useState(0);
  const [selectedMenuNodeL2, setSelectedMenuNodeL2] = React.useState([]);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // 关闭一级、二级菜单
  const handleCloseNavMenu = () => {
    setAnchorMenuL1(null);
  };

  const closeMenuL2 = () => {
    setAnchorMenuL2(null);
  };

  // 设置显示一、二级菜单的锚点
  const clickOpenMenuL1 = event => {
    setAnchorMenuL1(event.currentTarget);
  };

  const clickMenuL1 = (event, index) => {
    setSelectedMenuL1Index(index);

    setSelectedMenuNodeL2(
      menuNodeL2.filter(
        node => node.code.substring(0, 2) === menuNodeL1[index].code
      )
    );
    console.log(selectedMenuNodeL2.length);
    if (selectedMenuNodeL2.length === 0) {
      setAnchorMenuL2(null);
    } else {
      setAnchorMenuL2(event.currentTarget);
    }
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <NavLink className={'navlink'} to='/home'>
              blue600.com
            </NavLink>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={clickOpenMenuL1}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>

            {/* 如果是小屏幕，点击三明治按钮，弹出一级菜单项 menu-appbar */}
            <Menu
              id='menu-appbar'
              anchorEl={anchorMenuL1} // anchor 在被点击的 HTML element 周边
              anchorOrigin={{
                // anchor 的位置点
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorMenuL1)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {menuNodeL1.map((node, index) => {
                let disableFlag = false;
                if (disableNode.includes(node.code)) {
                  disableFlag = true;
                }
                return (
                  <MenuItem
                    disabled={disableFlag}
                    key={node.name}
                    selected={index === selectedMenuL1Index}
                    onClick={event => clickMenuL1(event, index)}
                  >
                    <Typography textAlign='center'>{node.name}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>

            {/* 小屏幕下，弹出二级菜单 */}

            <Menu
              id='menu-level2'
              anchorEl={anchorMenuL2} // anchor 在被点击的 HTML element 周边
              anchorOrigin={{
                // anchor 的位置点
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorMenuL2)}
              onClose={closeMenuL2}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {selectedMenuNodeL2.map(node => {
                let disableFlag = false;
                if (disableNode.includes(node.code)) {
                  disableFlag = true;
                }
                return (
                  <MenuItem disabled={disableFlag} key={node.name}>
                    <Typography textAlign='center'>{node.name}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
            {/* 二级菜单结束处 */}
          </Box>
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

          {/* 在蓝色AppBar背景上显示一级菜单按钮 */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuNodeL1.map(node => {
              let disableFlag = false;
              if (disableNode.includes(node.code)) {
                disableFlag = true;
              }
              return (
                <Button
                  disabled={disableFlag}
                  key={node.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {node.name}
                </Button>
              );
            })}
          </Box>

          {/* 显示最右边用户设置按钮 */}
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
