import React from "react";
import './TicketPopup.css';
import { Button } from "../button/Button";
import { TextInput } from "../text-input/TextInput";
import Date from "../date/Date";

export function TicketPopup(props) {

    return(
        <div className="popup">
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
                    <TextInput/>
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
                <Button text="Save"/>
                <Button text="Cancel" onClick={props.cancelOnClick}/>
            </div>   
        </div>
    );
}