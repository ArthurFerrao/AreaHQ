import React, { useState, useContext } from 'react'
import AuthContext from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import user from '../../assets/user.jpg';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import './styles.css';

const UserButtonMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { removeToken } = useContext(AuthContext);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    setAnchorEl(null);
    removeToken();
  };

  return (
    <div>
      <img className='nav-bar-user-img' src={user} onClick={handleClick}/>
      <Menu
        elevation={1}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Perfil</MenuItem>
        <MenuItem onClick={handleClose}>Minha conta</MenuItem>
        <MenuItem onClick={logout}>Sair</MenuItem>
      </Menu>
    </div>
  )
}

export default UserButtonMenu;