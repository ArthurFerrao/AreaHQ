import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

const TitleCard = ({title}) => {
  return (
    <div className='title-card'>
      <Link to={`/title/${title.id}`}>
        <img src={title.image}/>
      </Link>
      <div className='card-info'>
        <div className='card-header'>
          <Link to={`/title/${title.id}`}>
            <h2>{title.name}</h2>
          </Link>
          <span className='title-type'>{title.type.toUpperCase()}</span>
        </div>
        <div>
          {title.categories.map(category => <span key={category} className='category-box'>{category}</span>)}
        </div>
        <p>{title.description}</p>
      </div>
    </div>
  )
}

export default TitleCard