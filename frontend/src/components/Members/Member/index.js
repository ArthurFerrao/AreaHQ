import React from 'react';
import user from '../../../assets/user.jpg';

import './styles.css'

const Member = ({ member }) =>  (
  <div className='member'>
    <img className='user-img' src={user} />
    <span>{member.name}&nbsp;{member.activity !== 'all'? `(${member.activity})` :''}</span>
  </div>
)

export default Member