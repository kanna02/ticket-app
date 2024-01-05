import React, { useState, useEffect } from "react";
import { TicketPopup } from "../../components/ticket-popup/TicketPopup";
import { NavBar } from "../../components/navbar/NavBar";
import { StatusColumn } from "../../components/status-column/StatusColumn";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import "../project-board/ProjectBoard.css"
function ProjectBoardPage(props) {


    const location = useLocation();
    const projectId = location.state?.projectId;
    const [tickets, setTickets] = useState([]);

    const [showTicketPopup, setShowTicketPopup] = useState(false);

    const closePopup = () => {
        setShowTicketPopup(false);
    }

    // use this for + button onclick
    const openPopup = () => {
        setShowTicketPopup(true);
    }

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get(`https://db-api-dot-task-master-409210.nw.r.appspot.com/api/getTicketFromProjectId/${projectId}`);
                console.log("Tickets:", response.data);
                setTickets(response.data);
            } catch (error) {
                console.error("Error fetching tickets:", error);
            }
        };

        if (projectId) {
            fetchTickets();
        }
    }, [projectId]);
    
    return (
        <div>
            <NavBar/>
            <StatusColumn projectId={projectId} tickets={tickets}/>
            {showTicketPopup && <TicketPopup cancelOnClick={closePopup} />}
            <h3 className="delete-info">To delete a ticket, press right button on a ticket</h3>
        </div>
    );
}

export default ProjectBoardPage;

