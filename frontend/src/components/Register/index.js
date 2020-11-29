import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

const Register = ({ setLoginSelected }) => {
  return (
    <div className='login-container'>
      <div className='form-container'>
        <input className='form-input' type='text' placeholder='username'/>
        <input className='form-input' type='text' placeholder='password'/>
        <input className='form-input' type='text' placeholder='confirm password'/>
        <button>Cadastrar</button>
      </div>
      <div className='resister-message'>
        <h6>Já tem conta?</h6> <Link className='resister-btn' to='/login'>Entrar</Link>
      </div>
    </div>
  )
}

export default Register