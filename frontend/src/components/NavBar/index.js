import React from 'react'
import SearchBar from '../SearchBar'

import './styles.css';

const NavBar = () => {
  return (
    <nav className='nav-bar'>

      <div className='logo'>Área<span>HQ</span></div>
      <SearchBar/>

      <div className='nav-btns'>
        <div className='nav-btn'>Títulos</div>

        <div className='nav-auth-btns'>
          <div className='nav-btn login-btn'>Login</div>
          <div className='sign-up-btn'>Quero publicar</div>
        </div>
      </div>

    </nav> 
  )
}

export default NavBar