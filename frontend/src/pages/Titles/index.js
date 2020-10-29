import React, { useState } from 'react'
import TitleCard from '../../components/TitleCard'

import './styles.css';

const Titles = () => {
  const [titles, setTitles] = useState([
    {
      name: "Hero Academy",
      type: "Quadrinho",
      categories: [
        "Ação", "Aventura"
      ],
      image: "https://ptanime.com/wp-content/uploads/2019/01/Boku-no-Hero-Academia-Volume-22_-5-de-fevereiro-2019_confirmation-pending.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
      name: "Hero Academy",
      type: "Quadrinho",
      categories: [
        "Ação", "Aventura"
      ],
      image: "https://ptanime.com/wp-content/uploads/2019/01/Boku-no-Hero-Academia-Volume-22_-5-de-fevereiro-2019_confirmation-pending.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    }
  ]) 

  return ( 
    <div className="titles">
      <div className="titles-list">
        {titles.map((title) => <TitleCard title={title}/>)}
      </div>
    </div>
  )
}

export default Titles