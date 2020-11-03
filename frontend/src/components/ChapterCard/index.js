import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

const ChapterCard = ({chapter}) => (
  <div className='chapter-card'>
    <Link className='img-container' to={'/'}>
      <div className='chapter-img' style={{backgroundImage: `url(${chapter.titleImage})`}}></div>
      <div className='chapter-num'>{chapter.num}</div>
    </Link>
    <Link className='title-name' to={`/title/${chapter.titleId}`}>
      <h2>{chapter.titleName}</h2>
    </Link>
  </div>
)

export default ChapterCard