import React from 'react';

import './styles.css'

const Categories = ({ categories }) =>  (
  <div className='categories-container'>
    {categories.map(category => 
      <span className='category-box'>{category}</span>
    )}
  </div>
)

export default Categories