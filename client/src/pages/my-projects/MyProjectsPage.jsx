import React from "react";
import { NavBar } from "../../components/navbar/NavBar";
import { ProjectCard } from '../../components/project-card/ProjectCard';
import { useState, useEffect } from "react";
import './MyProjectsPage.css';
import { ProjectPopup } from "../../components/project-popup/ProjectPopup";
import { Button } from "../../components/button/Button";
import axios from "axios";
import { formatDate } from "../../Helper";
import Tooltip from "../../components/tooltip/Tooltip";


function MyProjectsPage(props) {

    const [showProjectPopup, setShowProjectPopup] = useState(false);
    const [projectId, setProjectID] = useState("");
    const [projectTitle, setProjectTitle] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projectCompletionDate, setProjectCompletionDate] = useState(null);
    const [projectMembers, setProjectMembers] = useState("");

    //TODO: get this from api/get/projects
    // const projects = [
    //     { name: "Project Name 1", description: "This form allows you to generate random text strings", participants: 4, completionDate: "23.01.2024" },
    //     { name: "Project Name 1", description: "This form allows you to generate random text strings", participants: 4, completionDate: "23.01.2024" },
    //     { name: "Project Name 1", description: "This form allows you to generate random text strings", participants: 4, completionDate: "23.01.2024" },
    //     { name: "Project Name 1", description: "This form allows you to generate random text strings", participants: 4, completionDate: "23.01.2024" },
    // ];
    const [projects, setProjects] = useState([]);

  

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://db-api-dot-task-master-409210.nw.r.appspot.com/api/get/projects');
                setProjects(response.data);
            } catch (error) {
                console.error("Error fetching projects:", error);
                // Handle error based on your requirements
            }
        };

        fetchProjects();
    }, []);

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
                project_id: projectId,
                title: projectTitle,
                description: projectDescription,
                completion_date: completionDateFormatted,
                members: projectMembers
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
                        <Tooltip text="Create New Project">
                            <Button round onClick={openPopup}/>  
                        </Tooltip>
                    </div>
            </div>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        id={project.project_id}
                        name={project.title}                          
                        projectDescription={project.description}                   
                        participants={project.members}
                        completionDate={formatDate(project.completion_date)}
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