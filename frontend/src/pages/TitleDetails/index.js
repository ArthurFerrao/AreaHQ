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

  return (
    <>
      {title && <TitleInfo title={title} />}
      <div className='cap-list'>
        
      </div>
    </>
  )
}

export default TitleDetails