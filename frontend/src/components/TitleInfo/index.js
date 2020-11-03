import React from 'react';
import CategoryBox from '../CategoryBox';
import TypeBox from '../TypeBox';

import './styles.css';

const TitleInfo = ({ title }) => (
  <div className="title-info">
    <img src={title.image}/>
    <div className='info-container'>
      <div className='info-header'>
        <h2>{title.name}</h2>
        <TypeBox type={title.type} />
      </div>
      <div>
        {title.categories.map(category => <CategoryBox key={category} category={category} />)}
      </div>
      <p>{title.description}</p>
    </div>
  </div>
)


export default TitleInfo