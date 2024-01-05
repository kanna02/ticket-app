import React, { useState, useEffect } from 'react';
import { TicketCard } from "../ticket-card/TicketCard";
import "./Status-column.css";
import axios from 'axios';
export const StatusColumn = ({ tickets }) => {
  console.log("Received tickets in StatusColumn:", tickets);

  // Function to distribute tickets into columns based on their status
  const distributeTickets = (tickets) => {
    return {
      todo: tickets.filter(ticket => ticket.ticket_status === 'to do'),
      inProgress: tickets.filter(ticket => ticket.ticket_status === 'in progress'),
      inReview: tickets.filter(ticket => ticket.ticket_status === 'in review'),
      done: tickets.filter(ticket => ticket.ticket_status === 'completed'),
    };
  };

  const statusMapping = {
    todo: 'to do',
    inProgress: 'in progress',
    inReview: 'in review',
    done: 'completed'
  };

  const getDatabaseStatus = (columnKey) => {
    return statusMapping[columnKey] || columnKey;
  };

  // State to hold the columns
  const [columns, setColumns] = useState(distributeTickets(tickets));

  // Effect to update columns when tickets change
  useEffect(() => {
    setColumns(distributeTickets(tickets));
  }, [tickets]);
  

  // Handlers for drag-and-drop
  const handleDragStart = (e, { id, from }) => {
    const dragInfo = JSON.stringify({ id, from });
    e.dataTransfer.setData("text/plain", dragInfo);
  };

  const updateTicketStatus = async (ticketId, newStatus) => {
    try {
      await axios.put(`https://db-api-dot-task-master-409210.nw.r.appspot.com//api/update/ticket/${ticketId}`, {
        ticket_status: newStatus
      });
      console.log(`Ticket ${ticketId} status updated to ${newStatus}`);
    } catch (error) {
      console.error("Error updating ticket status:", error);
    }
  };
  

  const handleOnDrop = (e, column) => {
    e.preventDefault();
    const dragInfo = JSON.parse(e.dataTransfer.getData("text/plain"));
    const draggedItem = columns[dragInfo.from].find(item => item.ticket_id === dragInfo.id);

    if (!draggedItem) {
      return;
    }

    const newStatus = getDatabaseStatus(column);
    const newColumns = {
      ...columns,
      [dragInfo.from]: columns[dragInfo.from].filter(item => item.ticket_id !== dragInfo.id),
      [column]: [...columns[column], { ...draggedItem, ticket_status: newStatus }]
    };

    setColumns(newColumns);
    updateTicketStatus(draggedItem.ticket_id, newStatus);
  };

  const handleDragOver = (e) => {
    e.preventDefault();

    
  };


  const handleTicketDelete = (deletedTicketId) => {
    setColumns(prevColumns => {
      const updatedColumns = {...prevColumns};
      Object.keys(updatedColumns).forEach(column => {
        updatedColumns[column] = updatedColumns[column].filter(ticket => ticket.ticket_id !== deletedTicketId);
      });
      return updatedColumns;
    });
  };

  return (
    <div className="board">
      {Object.entries(columns).map(([columnKey, columnItems]) => (
        <div className="column" key={columnKey}>
          <div className="column-header">{columnKey.toUpperCase()}</div>
          <div className="column-content"
               onDrop={e => handleOnDrop(e, columnKey)}
               onDragOver={handleDragOver}>
            {columnItems.map((ticket, index) => (
              <div 
                key={index} 
                draggable 
                onDragStart={(e) => handleDragStart(e, { id: ticket.ticket_id, from: columnKey })}
              >
                <TicketCard 
                  name={ticket.title}
                  id={ticket.ticket_id} 
                  priority={ticket.priority}
                  status={ticket.ticket_status}
                  onDelete={handleTicketDelete}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
