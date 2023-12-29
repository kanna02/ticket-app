import React from 'react'
import { TicketCard } from "../ticket-card/TicketCard"; 
import "../../components-css/Status-column.css"
export const StatusColumn = () => {
  return (
    <div className="project-board">
      <h1>My Project</h1>
      <div className="columns">
        <div className="column">
          <h2>TO DO</h2>
          <div className="column-content">

          </div>
        </div>
        <div className="column">
          <h2>IN PROGRESS</h2>
          <div className="column-content">

          </div>
        </div>
        <div className="column">
          <h2>IN REVIEW</h2>
          <div className="column-content">

          </div>
        </div>
        <div className="column">
          <h2>DONE</h2>
          <div className="column-content">

          </div>
        </div>
      </div>
    </div>
  );
};