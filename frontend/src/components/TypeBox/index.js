import React from 'react';

import './styles.css'

const TypeBox = ({ type }) =>  (
  <span className='title-type'>{type.toUpperCase()}</span>
)

export default TypeBox