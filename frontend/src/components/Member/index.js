import React from 'react';

import './styles.css'

const Member = ({ member }) =>  (
  <div className='member'>
    <img className='user-img' src='https://maodeamigo.com.br/images/users/user.jpg' />
    <span>{member}</span>
  </div>
)

export default Member