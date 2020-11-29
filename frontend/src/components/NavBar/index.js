import React, { useState } from 'react'
import SearchBar from '../SearchBar'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

import './styles.css';

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className='nav-bar'>
      <div className='nav-bar-container'>
        <Link className='logo' to='/'>Área<span>HQ</span></Link>
        <SearchBar className='teste'/>

        <MenuIcon id='hambuger-menu-icon' className='nav-btn' style={{ color: '#808080' }} fontSize='large' onClick={() => setOpenMenu(!openMenu)}/>
        <ul className={openMenu? 'nav-btns-container menu-active': 'nav-btns-container'}>
          <Link to='/titles' onClick={() => setOpenMenu(false)} className='nav-btn'>Títulos</Link>
          <Link to='/login' onClick={() => setOpenMenu(false)} className='nav-btn login-btn'>Login</Link>
          <Link to='/' onClick={() => setOpenMenu(false)} className='sign-up-btn'>Quero publicar</Link>
        </ul>
      </div>
      
    </nav> 
  )
}

export default NavBar