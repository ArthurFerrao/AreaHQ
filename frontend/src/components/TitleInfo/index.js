import React from 'react';
import Status from '../Status';
import Categories from '../Categories';
import Members from '../Members';

import './styles.css';

const TitleInfo = ({ title }) => (
  <div className='title-info'>
    <img className='info-img' src={title.image}/>
    <div>
      <div className='info-header'>
        <h2>{title.name}</h2>
        <Members members={title.members}/>
      </div>
      <Categories categories={title.categories} />
      <div className='status-container'>
        <span>Status:</span>
        <Status status={title.status}/>
        <span>{title.status}</span>
      </div>
      <p>{title.description}</p>
    </div>
  </div>
)


export default TitleInfo