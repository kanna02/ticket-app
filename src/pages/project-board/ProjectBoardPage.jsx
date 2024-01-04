import React from "react";
import { NavBar } from "../../components/headerbar/HeaderBar";
import { StatusColumn } from "../../components/status-column/StatusColumn";
import { TicketCard } from "../../components/ticket-card/TicketCard";
import { ProjectCard } from "../../components/project-card/ProjectCard";

function ProjectBoardPage(props) {
    // const projects = [
    //     { name: "Project Name 1", id: "23", priority:"high"}
    
    // ];
    return (
        <div>
            <NavBar/>
            <StatusColumn/>



        </div>
    );
}

export default ProjectBoardPage;