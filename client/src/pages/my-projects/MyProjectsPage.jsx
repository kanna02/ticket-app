import React from "react";
import { NavBar } from "../../components/headerbar/NavBar";
import { ProjectCard } from '../../components/project-card/ProjectCard';
import { useState } from "react";
import './MyProjectsPage.css';
import { ProjectPopup } from "../../components/project-popup/ProjectPopup";
import { Button } from "../../components/button/Button";
import axios from "axios";


function MyProjectsPage(props) {

    const [showProjectPopup, setShowProjectPopup] = useState(false);
    const [projectTitle, setProjectTitle] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projectCompletionDate, setProjectCompletionDate] = useState(null);
    const [projectMembers, setProjectMembers] = useState("");

    //TODO: get this from api/get/projects
    const projects = [
        { name: "Project Name 1", description: "This form allows you to generate random text strings", participants: 4, completionDate: "23.01.2024" },
        { name: "Project Name 1", description: "This form allows you to generate random text strings", participants: 4, completionDate: "23.01.2024" },
        { name: "Project Name 1", description: "This form allows you to generate random text strings", participants: 4, completionDate: "23.01.2024" },
        { name: "Project Name 1", description: "This form allows you to generate random text strings", participants: 4, completionDate: "23.01.2024" },
    ];

    const closePopup = () => {
        setShowProjectPopup(false);
    }

    const openPopup = () => {
        setShowProjectPopup(true);
    }

    const saveProject = () => {
        // throw error if fields empty
        if (projectTitle === "" || projectDescription === "" || projectMembers === "" || projectCompletionDate == null) {
            alert("error, not all inputs have values");
        }
        else {
            // format date
            const date = new Date(projectCompletionDate);
            const completionDateFormatted = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
            
            const baseURL = 'https://db-api-dot-task-master-409210.nw.r.appspot.com/api/post/project';
            const body = {
                title: projectTitle,
                description: projectDescription,
                completion_date: completionDateFormatted
            }
            axios.post(baseURL, body
                ).then((response) => {
                    console.log(response);
                }).catch(function (error) {
                console.log(error);
                });

            closePopup();
        }
    }



    return (
        <div className="my-projects-container">
            <NavBar/>
            <div className="top-container">
                <div className="projects-headers">
                    <h1>My Projects</h1>
                    <p>Welcome back, select your project.</p>
                </div>
                <div className="header-actions">
                    <Button round onClick={openPopup}/>             
                </div>
            </div>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        name={project.name}                          
                        projectDescription={project.description}                   
                        participants={project.participants}
                        completionDate={project.completionDate}
                    />
                ))}
            </div>
        {showProjectPopup && 
            <ProjectPopup 
                title={projectTitle} setTitle={e => setProjectTitle(e.target.value)} 
                description={projectDescription} setDescription={e => setProjectDescription(e.target.value)} 
                completionDate={projectCompletionDate} setCompletionDate={setProjectCompletionDate} 
                members={projectMembers} setMembers={e => setProjectMembers(e.target.value)} 
                cancelOnClick={closePopup} saveOnClick={saveProject}
            />
        }
        </div>       
    );
}
export default MyProjectsPage;