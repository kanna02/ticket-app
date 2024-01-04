import React from "react";
import { NavBar } from "../../components/headerbar/HeaderBar";
import { ProjectCard } from '../../components/project-card/ProjectCard';
import { RoundButton } from '../../components/round-button/RoundButton';

import './MyProjectPage.css';
function MyProjectsPage(props) {
    const projects = [
        { name: "Project Name 1", description: "This form allows you to generate random text strings", participants: 4, completionDate: "23.01.2024" },
        { name: "Project Name 1", description: "This form allows you to generate random text strings", participants: 4, completionDate: "23.01.2024" },
        { name: "Project Name 1", description: "This form allows you to generate random text strings", participants: 4, completionDate: "23.01.2024" },
        { name: "Project Name 1", description: "This form allows you to generate random text strings", participants: 4, completionDate: "23.01.2024" },
    ];

    const handleAddProjectClick = () => {
    };
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
        </div>
    );
}
export default MyProjectsPage;