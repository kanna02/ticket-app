import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import "./Project-card.css"
export const ProjectCard = (props) => {
  const navigate = useNavigate(); 

  const handleCardClick = () => {

    // navigate('/project-board');
    navigate('/project-board', { state: { projectId: props.id } });
  };

  return (

<div className="project-card" onClick={handleCardClick}>
      <div className="project-content">
        <h2>ID: {props.id}</h2>
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