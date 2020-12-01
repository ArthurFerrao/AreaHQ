import React, { useState, useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import authAPI from '../../services/auth';

const Login = () => {
  const [ user, setUser ] = useState({username: '', password: ''});
  const { setAuthToken } = useContext(AuthContext);
  const history = useHistory();

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({...user, [name]: value});
  }

  const onSubmit = async () => {
    const data = await authAPI.login(user)

    if(data.token) {
      setAuthToken(data.token)
      return history.push('/');
    }

    setUser({username: '', password: ''});
  }

  return (
    <div className='login-container'>
      <div className='form-container'>
        <input className='form-input' type='text' name='username' onChange={onChange} placeholder='username' value={user.username}/>
        <input className='form-input' type='password' name='password' onChange={onChange} placeholder='password' value={user.password}/>
        <button type='submit' onClick={onSubmit}>Entrar</button>
      </div>
      <div className='auth-message'>
        <h6>Não tem conta?</h6> <Link className='auth-btn' to='/register'>Cadastre-se</Link>
      </div>
    </div>
  )
}

export default Login;