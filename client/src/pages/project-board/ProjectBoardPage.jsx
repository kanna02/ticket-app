import React, { useState } from "react";
import { TicketPopup } from "../../components/ticket-popup/TicketPopup";

function ProjectBoardPage(props) {

    const [showTicketPopup, setShowTicketPopup] = useState(true);

    const closePopup = () => {
        setShowTicketPopup(false);
    }

    // use this for + button onclick
    const openPopup = () => {
        setShowTicketPopup(true);
    }

    return (
        <div>
            <h1>Project Board</h1>
            {showTicketPopup && <TicketPopup cancelOnClick={closePopup} />}
        </div>
    );
}

export default ProjectBoardPage;