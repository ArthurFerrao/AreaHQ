import React from 'react';

import './styles.css';

const TitleInfo = ({ title }) => (
  <div className="title-info">
    <div className='title-card'>
      <img src={title.image}/>
      <div className='card-info'>
        <div className='card-header'>
          <h2>{title.name}</h2>
          <span className='title-type'>{title.type.toUpperCase()}</span>
        </div>
        <div>
          {title.categories.map(category => <span className='category-box'>{category}</span>)}
        </div>
        <p>{title.description}</p>
      </div>
    </div>
  </div>
)


export default TitleInfo