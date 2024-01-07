import React, { useState, useEffect } from "react";
import { TicketPopup } from "../../components/ticket-popup/TicketPopup";
import { NavBar } from "../../components/navbar/NavBar";
import { StatusColumn } from "../../components/status-column/StatusColumn";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import "../project-board/ProjectBoard.css"
import { Button } from "../../components/button/Button";
import { formatDate } from "../../Helper";
import Tooltip from "../../components/tooltip/Tooltip";
function ProjectBoardPage(props) {


    const location = useLocation();
    const projectId = location.state?.projectId;
    const [tickets, setTickets] = useState([]);

    const [projectID, setProjectID] = useState("");
    const [ticketTitle, setTicketTitle] = useState("");
    const [ticketDescription, setTicketDescription] = useState("");
    const [ticketComplexity, setTicketComplexity] = useState("");
    const [ticketAssignee, setTicketAssignee] = useState("");
    const [ticketCompletionDate, setTicketCompletionDate] = useState(null);
    const [ticketPriority, setTicketPriority] = useState("low");

    const [showTicketPopup, setShowTicketPopup] = useState(false);

    const closePopup = () => {
        setShowTicketPopup(false);
    }

    // use this for + button onclick
    const openPopup = () => {
        setShowTicketPopup(true);
    }

    const saveTicket = () => {
        if (ticketTitle === "" || ticketDescription === "" || ticketAssignee === "" || ticketCompletionDate == null || ticketComplexity === "" || projectID === "" || ticketPriority === "") {
            alert("error, not all inputs have values");
        }
        else {
            const date = new Date(ticketCompletionDate);
            const completionDateFormatted = formatDate(date);
            
            const baseURL = 'https://db-api-dot-task-master-409210.nw.r.appspot.com/api/post/ticket';
            const body = {
                project_id: projectID,
                title: ticketTitle,
                description: ticketDescription,
                completion_date: completionDateFormatted,
                assignee: ticketAssignee,
                complexity: ticketComplexity,
                priority: ticketPriority,
                status: "to do"
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

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get(`https://db-api-dot-task-master-409210.nw.r.appspot.com/api/getTicketFromProjectId/${projectId}`);
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
            <h3 className="delete-info">To delete a ticket, press right button on a ticket</h3>
            <div className="plus-button-positioning">
            <Tooltip point text="Create New Ticket">
                <Button round onClick={openPopup} />
            </Tooltip>
            {showTicketPopup && 
                <TicketPopup 
                saveOnClick={saveTicket} cancelOnClick={closePopup} 
                projectID={projectID} setProjectID={e => setProjectID(e.target.value)}
                title={ticketTitle} setTitle={e => setTicketTitle(e.target.value)}
                priority={ticketPriority} setPriority={e => setTicketPriority(e.target.value)}
                complexity={ticketComplexity} setComplexity={e => setTicketComplexity(e.target.value)}
                completionDate={ticketCompletionDate} setCompletionDate={setTicketCompletionDate}
                assignee={ticketAssignee} setAssignee={e => setTicketAssignee(e.target.value)}
                description={ticketDescription} setDescription={e => setTicketDescription(e.target.value)}
            />}
            </div>
        </div>
    );
}

export default ProjectBoardPage;

