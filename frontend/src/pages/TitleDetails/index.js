import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TitleInfo from '../../components/TitleInfo'
import API from '../../utils/API.js';

import './styles.css';

const TitleDetails = () => {
  const [title, setTitle] = useState(null);
  const { titleId } = useParams();

  useEffect(() => {
    API.get(`titles/${titleId}`)
      .then(res => {
        setTitle(res.data);
      });
  }, [titleId]);

  const dateFormatted = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat().format(date)
  }

  return (
    <div className='title-details'>
      {title && 
        <div className='info'>
          <div className="background-info" style={{backgroundImage: `url(${title.image})`}}></div>
          <TitleInfo title={title} />
        </div>
      }
      
      <div className='chapters-list'>
        <div className='chapters-list-header'>
          <h2>Capítulos</h2>
          <div className='num-chapters'>{title && title.chapters.length}</div>
        </div>
        {title && 
          title.chapters.map(chapter => 
            <div className='chapter-line'>
              <Link className='chapter-num' to={`/title/${title.name.split(' ').join('')}/chapter/${chapter.id}`}>
                <span>Capítulo {chapter.num} {chapter.name? `- ${chapter.name}`: ''}</span>
              </Link>
              <span className='chapter-date'>{dateFormatted(chapter.createdAt)}</span>
            </div>
        )}
      </div>
    </div>
  )
}

export default TitleDetails