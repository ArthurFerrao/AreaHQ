import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

import './styles.css';

const statusList = {
  ACTIVE: 'Ativo',
  CONCLUDED: 'Concluído',
  CANCELED: 'Cancelado'
}

const Status = ({ status, style }) => {
  
  const handleStatusColor = () => {
    switch(status){
      case statusList.ACTIVE:
        return 'rgb(32, 255, 2)';
      case statusList.CONCLUDED:
        return 'rgb(0, 0, 255)';
      case statusList.CANCELED:
        return 'rgb(255, 2, 2)';
      default:
        return '#fff';
    }
  }

  return(
    <Tooltip style={{...style, backgroundColor: handleStatusColor()}} title={status} placement="top">
      <span className='title-status-icon'></span>
    </Tooltip>
  )
}

export default Status;