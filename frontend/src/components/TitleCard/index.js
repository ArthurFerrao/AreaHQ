import React from 'react'

import './styles.css'

const TitleCard = ({title}) => {
  return (
    <div className="title-card">
      <img src={title.image}/>
      <div className="card-info">
        <div className="card-header">
          <h1>{title.name}</h1>
          <span className='title-type'>{title.type.toUpperCase()}</span>
        </div>
        <div>
          {title.categories.map(category => <span className='category-box'>{category}</span>)}
        </div>
        <p>{title.description}</p>
      </div>
    </div>
  )
}

export default TitleCard