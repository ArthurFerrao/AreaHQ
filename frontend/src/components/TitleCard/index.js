import React from 'react';
import { Link } from 'react-router-dom';
import CategoryBox from '../CategoryBox';
import TypeBox from '../TypeBox';

import './styles.css'

const TitleCard = ({title}) => {
  return (
    <div className='title-card'>
      <Link to={`/title/${title.id}`}>
        <img src={title.image}/>
      </Link>
      <div className='card-info'>
        <div className='card-header'>
          <Link className='card-title' to={`/title/${title.id}`}>
            <h2>{title.name}</h2>
          </Link>
          <TypeBox type={title.type} />
        </div>
        <div>
          {title.categories.map(category => <CategoryBox key={category} category={category} />)}
        </div>
        <p>{title.description}</p>
      </div>
    </div>
  )
}

export default TitleCard