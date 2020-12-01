import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [ user, setUser ] = useState({username: '', password: ''});

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({...user, [name]: value});
  }

  const onSubmit = () => {
    
  }

  return (
    <div className='register-container'>
      <div className='form-container'>
        <input className='form-input' type='text' placeholder='username' onChange={onChange} value={user.username}/>
        <input className='form-input' type='password' placeholder='password' onChange={onChange} value={user.password}/>
        <input className='form-input' type='password' placeholder='confirm password'/>
        <button type='submit' onClick={onSubmit}>Cadastrar</button>
      </div>
      <div className='auth-message'>
        <h6>Já tem conta?</h6> <Link className='auth-btn' to='/login'>Entrar</Link>
      </div>
    </div>
  )
}

export default Register