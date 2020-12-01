import React, { useState, useContext } from 'react'
import AuthContext from '../../contexts/AuthContext';
import user from '../../assets/user.jpg';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import './styles.css';

const UserButtonMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { removeAuthToken } = useContext(AuthContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    setAnchorEl(null);
    removeAuthToken();
  };

  return (
    <div>
      <img className='nav-bar-user-img' src={user} onClick={handleClick}/>
      <Menu
        elevation={1}
        anchorEl={anchorEl}
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