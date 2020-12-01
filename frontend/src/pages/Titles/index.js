import React, { useState, useEffect } from 'react';
import TitleCard from '../../components/TitleCard';
import api from '../../services/api.js';

import './styles.css';

const Titles = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    api.get("titles")
      .then(res => {
        setTitles(res.data);
      });
  }, []);

  return ( 
    <div className="titles">
      <div className="titles-list">
        {titles.map(title =>
          <TitleCard key={title.id} title={title}/>
        )}
      </div>
    </div>
  )
}

export default Titles