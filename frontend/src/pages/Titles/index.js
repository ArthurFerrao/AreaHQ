import React, { useState, useEffect } from 'react';
import TitleCard from '../../components/TitleCard';
import API from '../../utils/API.js';

import './styles.css';

const Titles = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    API.get("titles")
      .then(res => {
        setTitles(res.data);
      });
  }, []);

  return ( 
    <div className="titles">
      <div className="titles-list">
        {titles.map((title) => <TitleCard title={title}/>)}
      </div>
    </div>
  )
}

export default Titles