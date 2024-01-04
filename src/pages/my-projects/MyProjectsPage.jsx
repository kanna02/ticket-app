import React from "react";
import { NavBar } from "../../components/headerbar/HeaderBar";
import { ProjectCard } from '../../components/project-card/ProjectCard';
import { RoundButton } from '../../components/round-button/RoundButton';
import { useState } from "react";


import './MyProjectPage.css';
import { ProjectPopup } from "../../components/project-popup/ProjectPopup";
function MyProjectsPage(props) {
    const projects = [
        { name: "Project Name 1", description: "This form allows you to generate random text strings", participants: 4, completionDate: "23.01.2024" },
        { name: "Project Name 1", description: "This form allows you to generate random text strings", participants: 4, completionDate: "23.01.2024" },
        { name: "Project Name 1", description: "This form allows you to generate random text strings", participants: 4, completionDate: "23.01.2024" },
        { name: "Project Name 1", description: "This form allows you to generate random text strings", participants: 4, completionDate: "23.01.2024" },
    ];

    const handleAddProjectClick = () => {
        openPopup();
    };

    const [showProjectPopup, setShowProjectPopup] = useState(false);

    const closePopup = () => {
        setShowProjectPopup(false);
    }

    // use this for + button onclick
    const openPopup = () => {
        setShowProjectPopup(true);
    }

    return (
        <div className="my-projects-container">
            <NavBar/>
            <div className="top-container">
            <div className="projects-header">
                <h1>My Projects</h1>
                <p>Welcome back, select your project.</p>
            </div>
            <div className="header-actions">
                    <RoundButton onClick={handleAddProjectClick} />
                    
                </div>
            </div>
                <div className="projects-container">
            {projects.map((project, index) => (
                <ProjectCard key={index} name={project.name}
                        projectDescription={project.description}
                        participants={project.participants}
                        completionDate={project.completionDate}
                    />
            ))}
        </div>
        {showProjectPopup && <ProjectPopup cancelOnClick={closePopup}/>}
        </div>

        
    );
}
export default MyProjectsPage;