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

  const dateFormatted = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat().format(date)
  }

  return (
    <div className='home'>
      <div className='chapters-date-list'>
        {chapters && 
          orderDateList().map( date =>
            <div key={date} className='chapters-date-container'>
              <div className='date'>
                <span>{dateFormatted(date)}</span>
              </div>
              <div className='chapters-date-content'>
                {chapters[date].map((chaptersSet, id) =>
                  <ChapterCard key={id} chaptersSet={chaptersSet} />
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