import React from 'react';
import CategoryBox from '../CategoryBox';
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
      <div>
        {title.categories.map(category => <CategoryBox key={category} category={category} />)}
      </div>
      <p>{title.description}</p>
    </div>
  </div>
)


export default TitleInfo