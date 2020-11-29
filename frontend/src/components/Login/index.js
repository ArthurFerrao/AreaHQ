import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

const Login = ({ setLoginSelected }) => {
  return (
    <div className='login-container'>
      <div className='form-container'>
        <input className='form-input' type='text' placeholder='username'/>
        <input className='form-input' type='text' placeholder='password'/>
        <button>Entrar</button>
      </div>
      <div className='resister-message'>
        <h6>Não tem conta?</h6> <Link className='resister-btn' to='/register'>Cadastre-se</Link>
      </div>
    </div>
  )
}

export default Login