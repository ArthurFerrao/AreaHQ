import React from 'react'
import SearchBar from '../SearchBar'
import { Link } from 'react-router-dom';

import './styles.css';

const NavBar = () => {
  return (
    <nav className='nav-bar'>

      <Link className='logo' to='/'>Área<span>HQ</span></Link>
      <SearchBar/>

      <div className='nav-btns'>
        <Link className='nav-btn' to='/titles'>Títulos</Link>

        <div className='nav-auth-btns'>
          <div className='nav-btn login-btn'>Login</div>
          <div className='sign-up-btn'>Quero publicar</div>
        </div>
      </div>

    </nav> 
  )
}

export default NavBar