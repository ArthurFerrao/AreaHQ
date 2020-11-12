import React from 'react';

import './styles.css'

const Member = ({ member }) =>  (
  <div className='member'>
    <img className='user-img' src='https://maodeamigo.com.br/images/users/user.jpg' />
    <span>{member.name}&nbsp;{member.activity !== 'all'? `(${member.activity})` :''}</span>
  </div>
)

export default Member