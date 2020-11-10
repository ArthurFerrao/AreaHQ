import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

const ChapterCard = ({chapter}) => (
  <div className='chapter-card'>
    <Link className='img-container' to={'/'}>
      <div className='chapter-img' style={{backgroundImage: `url(${chapter.titleImage})`}}></div>
      <div className='numbers-container'>
        {chapter.chapters.map(num => 
          <div className='number-box' >{num}</div>
        )}
      </div>
    </Link>
    <Link className='title-name-container' to={`/title/${chapter.titleId}`}>
      <h2 className='title-name'>{chapter.titleName}</h2>
    </Link>
  </div>
)

export default ChapterCard