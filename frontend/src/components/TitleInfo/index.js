import React from 'react';
import CategoryBox from '../CategoryBox';
import Member from '../Member';

import './styles.css';

const TitleInfo = ({ title }) => (
  <div className='title-info'>
    <img className='info-img' src={title.image}/>
    <div>
      <div className='info-header'>
        <h2>{title.name}</h2>
        <div className='members'>
          por &nbsp; <Member member={title.type} />(autor) e &nbsp;<Member member={title.type} /> (arte)
        </div>
      </div>
      <div>
        {title.categories.map(category => <CategoryBox key={category} category={category} />)}
      </div>
      <p>{title.description}</p>
    </div>
  </div>
)


export default TitleInfo