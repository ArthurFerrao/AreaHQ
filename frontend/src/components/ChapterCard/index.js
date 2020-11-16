import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

const getPathFormatted = ({ titleName, id }) => {
  return `/title/${titleName.split(' ').join('')}/chapter/${id}`
}

const ChapterCard = ({chaptersSet}) => (
  <div className='chapter-card'>
    <Link className='img-container' to={getPathFormatted(chaptersSet)}>
      <div className='chapter-img' style={{backgroundImage: `url(${chaptersSet.titleImage})`}}></div>
      <div className='numbers-container'>
        {chaptersSet.chapters.map(chapter => 
          <Link className='number-box' to={getPathFormatted(chaptersSet)}>
            {chapter.num}
          </Link>
        )}
      </div>
    </Link>
    <Link className='title-name-container' to={`/title/${chaptersSet.titleId}`}>
      <h2 className='title-name'>{chaptersSet.titleName}</h2>
    </Link>
  </div>
)

export default ChapterCard