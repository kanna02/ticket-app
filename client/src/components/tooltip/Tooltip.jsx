import React from "react";
import './Tooltip.css'

function Tooltip(props) {

    return (
        <div className="tooltip" >
            {props.children}
            <span className="tooltiptext">{props.text}</span>
        </div>      
    );
}

export default Tooltip;