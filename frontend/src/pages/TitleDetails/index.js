import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
  }, []);

  const getDateFormatted = (date) => {
    const newDate = new Date(date);
    console.log(newDate);
    return `${newDate.getDay()}/${newDate.getMonth()}`;
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
        <h1>Capitulos</h1>
        {title && 
          title.chapters.map(chapter => 
            <div className='chapter-line'>
              <span>Capitulo {chapter.num} {chapter.name? `- ${chapter.name}`: ''}</span>
              <span>{chapter.createdAt}</span>
            </div>
        )}
      </div>
    </div>
  )
}

export default TitleDetails