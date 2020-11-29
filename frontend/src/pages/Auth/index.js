import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../../components/Login';
import Register from '../../components/Register';

import './styles.css'

const Auth = () => {
  return (
    <div className='auth-page'>
      <Router>
        <div className='auth-container'>
          <div className='auth-header'>
              <Route exact path="/login" render={() => <h2>ENTRAR</h2>} />
              <Route exact path="/register" render={() => <h2>CADASTRAR</h2>} />
            <hr/>
          </div>
          <div className='auth-form'>
            <Route exact path="/login" render={() => <Login />} />
            <Route exact path="/register" render={() => <Register />} />
          </div>
        </div>
      </Router>
    </div>
  )
}

export default Auth