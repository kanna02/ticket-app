import React, { useState } from "react";
import { TicketPopup } from "../../components/ticket-popup/TicketPopup";
import { NavBar } from "../../components/headerbar/NavBar";
import { StatusColumn } from "../../components/status-column/StatusColumn";

function ProjectBoardPage(props) {

    const [showTicketPopup, setShowTicketPopup] = useState(false);

    const closePopup = () => {
        setShowTicketPopup(false);
    }

    // use this for + button onclick
    const openPopup = () => {
        setShowTicketPopup(true);
    }

    return (
        <div>
            <NavBar/>
            <StatusColumn/>
            {showTicketPopup && <TicketPopup cancelOnClick={closePopup} />}
        </div>
    );
}

export default ProjectBoardPage;

