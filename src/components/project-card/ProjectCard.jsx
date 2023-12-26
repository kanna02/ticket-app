import React from 'react'

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