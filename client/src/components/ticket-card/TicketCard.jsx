import React from 'react'
import "./Ticket-card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeOff, faVolumeLow, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Tooltip from '../tooltip/Tooltip';
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

export const TicketCard = ({priority, name, id, onDelete  }) => {
    const priorityIcon = getPriorityIcon(priority);

    const handleRightClick = async (event) => {
      event.preventDefault();
      if (window.confirm(`Are you sure you want to delete Ticket ID: ${id}?`)) {
          try {
              await axios.delete(`https://db-api-dot-task-master-409210.nw.r.appspot.com/api/delete/ticket/${id}`);
              onDelete(id);
          } catch (error) {
              console.error("Error deleting ticket:", error);
          }
      }
  };
  
    return (
          <div className="ticket-card" onContextMenu={handleRightClick}>
              <h3>{name}</h3>
              <div className="ticket-footer">
                <FontAwesomeIcon icon={priorityIcon} size="2x" className={`ticket-icon ${priority}`} />
                {/* <span className="ticket-id">{id}</span> */}
                <span className='ticket-id'>Ticket ID: {id}</span>
              </div>
          </div>
    );
  };