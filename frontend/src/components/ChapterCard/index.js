import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

const getPathFormatted = ({ titleName, id }) => {
  return `/title/${titleName.split(' ').join('')}/chapter/${id}`
}

const ChapterCard = ({chaptersSet}) => (
  <div className='chapter-card'>
    <div className='img-container' style={{backgroundImage: `url(${chaptersSet.titleImage})`}}>
      <Link className='chapter-img' to={getPathFormatted(chaptersSet)}></Link>
      <div className='numbers-container'>
        {chaptersSet.chapters.map(chapter => 
          <Link key={chapter.id} className='number-box' to={getPathFormatted(chaptersSet)}>
            {chapter.num}
          </Link>
        )}
      </div>
    </div>
    <Link className='title-name-container' to={`/title/${chaptersSet.titleId}`}>
      <h2 className='title-name'>{chaptersSet.titleName}</h2>
    </Link>
  </div>
)

export default ChapterCard