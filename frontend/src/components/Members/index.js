import React from 'react';
import Member from './Member';

import './styles.css'

const Members = ({ members }) =>  (
  <div className='members'>
    <span>por &nbsp;</span>
    {members.map((member, id) => 
      <div key={id} className='member-container'>
        <Member member={member}/> {(id < members.length-1) && <span>, &nbsp;</span>}
      </div>
    )}
  </div>
)

export default Members