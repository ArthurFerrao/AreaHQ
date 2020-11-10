import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

const ChapterCard = ({chaptersSet}) => (
  <div className='chapter-card'>
    <Link className='img-container' to={`/title/${chaptersSet.titleName.split(' ').join('')}/chapter/${chaptersSet.id}`}>
      <div className='chapter-img' style={{backgroundImage: `url(${chaptersSet.titleImage})`}}></div>
      <div className='numbers-container'>
        {chaptersSet.chapters.map(num => 
          <Link className='number-box' to={`/title/${chaptersSet.titleName.split(' ').join('')}/chapter/${num}`}>
            {num}
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