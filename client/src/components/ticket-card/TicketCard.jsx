import React from 'react'
import "./Ticket-card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeOff, faVolumeLow, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

export const getPriorityIcon = (priority) => {
  switch (priority) {
    case 'high':
      return faVolumeHigh;
    case 'medium':
      return faVolumeLow;
    case 'low':
      return faVolumeOff;
    default:
      return faVolumeOff;
  }
};

export const TicketCard = ({priority, name, id }) => {
    const priorityIcon = getPriorityIcon(priority);
  
    return (
      <div className="ticket-card">
        <h3>{name}</h3>
        <div className="ticket-footer">
          <FontAwesomeIcon icon={priorityIcon} size="2x" className={`ticket-icon ${priority}`} />
          {/* <span className="ticket-id">{id}</span> */}
          <span className='ticket-id'>Ticket ID: {id}</span>
        </div>
      </div>
    );
  };