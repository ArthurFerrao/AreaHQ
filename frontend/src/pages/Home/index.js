import React, { useState, useEffect } from 'react';
import API from '../../utils/API.js';
import ChapterCard from '../../components/ChapterCard';

import './styles.css'

const Home = () => {
  const [chapters, setChapters] = useState();

  useEffect(() => {
    API.get('chapters')
      .then(res => setChapters(res.data));
  }, []);

  const orderDateList = () => {
    const dates = Object.keys(chapters);
    const datesSorted = dates.sort((a, b) => new Date(b) - new Date(a));

    return datesSorted
  }

  const dateFormated = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat().format(date)
  }

  return (
    <div className='home'>
      <div className='chapters-date-list'>
        {chapters && 
          orderDateList().map( date =>
            <div className='chapters-date-container'>
              <div className='date'>
                <span>{dateFormated(date)}</span>
              </div>
              <div className='chapters-date-content'>
                {chapters[date].map( chapter => 
                  <ChapterCard chapter={chapter} />
                )}
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Home