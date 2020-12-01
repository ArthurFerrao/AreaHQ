import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../../components/Login';
import Register from '../../components/Register';

import './styles.css'

const Auth = () => {
  return (
    <div className='auth-page'>
        <div className='auth-container'>
          <div className='auth-header'>
              <Route exact path="/login" render={() => <h2>ENTRAR</h2>} />
              <Route exact path="/register" render={() => <h2>CADASTRAR</h2>} />
            <hr/>
          </div>
          <div className='auth-form'>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </div>
        </div>
    </div>
  )
}

export default Auth