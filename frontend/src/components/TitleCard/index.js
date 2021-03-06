import React from 'react';
import { Link } from 'react-router-dom';
import Status from '../Status';
import Categories from '../Categories';
import Members from '../Members';

import './styles.css'

const TitleCard = ({ title }) => {
  return (
    <div className='title-card'>
      <Link className='card-img-container' to={`/title/${title.id}`}>
        <img className='card-img' src={title.image}/>
        <Status status={title.status} style={{position: 'absolute', top: '0.5rem', right: '0.5rem'}}/>
      </Link>
      <div className='card-info'>
        <div className='card-header'>
          <Link className='card-title' to={`/title/${title.id}`}>
            <h2>{title.name}</h2>
          </Link>
          <Members members={title.members}/>
        </div>
        <Categories categories={title.categories} />
        <p>{title.description}</p>
      </div>
    </div>
  )
}

export default TitleCard;