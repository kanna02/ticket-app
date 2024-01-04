import React from 'react'
import "./Project-card.css"
export const ProjectCard = (props) => {
  return (

<div className="project-card">
      <div className="project-content">
    
        <h2>{props.name}</h2>
        <p>{props.projectDescription}</p>
        <hr  />
        <div className="project-details">
          <span>{props.participants} Participants</span>
          <span>Completion date {props.completionDate}</span>
        </div>
      </div>
    </div>
  )
}