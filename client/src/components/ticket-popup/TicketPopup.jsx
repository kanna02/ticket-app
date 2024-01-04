import React, { useState } from "react";
import './TicketPopup.css';
import { Button } from "../button/Button";
import { TextInput } from "../text-input/TextInput";
import Date from "../date/Date";
import { Dropdown } from "../dropdown/Dropdown";

export function TicketPopup(props) {

    const [priority, setPriority] = useState(null);

    return(
        <div className="ticket-popup">
            <div className="title">
                <h1 className="title">Create New Ticket</h1>
            </div>
            <div className="row">
                <div className="label">Project</div>
                <div className="input">
                    <TextInput/>
                </div>
            </div>
            <div className="row">
                <div className="label">Title</div>
                <div className="input">
                    <TextInput/>
                </div>
            </div>
            <div className="row">
                <div className="label">Priority</div>
                <div className="input">
                    <Dropdown options={["low", "medium", "high"]} selectedOption={priority} onSelect={setPriority}/>
                </div>
            </div>
            <div className="row">
                <div className="label">Description</div>
                <div className="input">
                    <TextInput description/>
                </div>
            </div>
            <div className="row">
                <div className="label">Complexity</div>
                <div className="input">
                    <TextInput/>
                </div>
            </div>
            <div className="row">
                <div className="label">Deadline</div>
                <div className="input">
                    <Date input={props.input}/>
                </div>
            </div>
            <div className="row">
                <div className="label">Assignees</div>
                <div className="input">
                    <TextInput/>
                </div>
            </div> 
            <div className="buttons">
                <Button save text="Save"/>
                <Button cancel text="Cancel" onClick={props.cancelOnClick}/>
            </div>   
        </div>
    );
}