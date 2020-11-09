import React, { useState, useEffect } from 'react';
import API from '../../utils/API.js';
import ChapterCard from '../../components/ChapterCard';

import './styles.css'

const Home = () => {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    API.get("chapters")
      .then(res => {
        setChapters(res.data);
      });
  }, []);

  return (
    <div className="home">
      <div className="chapters-day-list">
        {chapters && 
          chapters.map(chapter => <ChapterCard chapter={chapter} />
        )}
      </div>
    </div>
  )
}

export default Home