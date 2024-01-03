import React, { useState } from "react";
import { ProjectPopup } from "../../components/project-popup/ProjectPopup";

function MyProjectsPage(props) {

    const [showProjectPopup, setShowProjectPopup] = useState(true);

    const closePopup = () => {
        setShowProjectPopup(false);
    }

    // use this for + button onclick
    const openPopup = () => {
        setShowProjectPopup(true);
    }

    return (
        <div>
            <h1>My Projects Page</h1>
            {showProjectPopup && <ProjectPopup cancelOnClick={closePopup}/>}
        </div>
    );
}

export default MyProjectsPage;