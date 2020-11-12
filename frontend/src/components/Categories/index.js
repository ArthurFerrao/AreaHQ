import React from 'react';
import CategoryBox from './CategoryBox';

import './styles.css'

const Categories = ({ categories }) =>  (
  <div className='categories-container'>
    {categories.map(category => 
      <CategoryBox key={category} category={category} />
    )}
  </div>
)

export default Categories