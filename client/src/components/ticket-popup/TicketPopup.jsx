import React, { useState } from "react";
import './TicketPopup.css';
import { Button } from "../button/Button";
import { TextInput } from "../text-input/TextInput";
import Date from "../date/Date";
import { Dropdown } from "../dropdown/Dropdown";

export function TicketPopup(props) {

    const options = [
        { value: 'low', label: 'low' },
        { value: 'medium', label: 'medium' },
        { value: 'high', label: 'high' }]

    return(
        <div className="ticket-popup">
            <div className="title">
                <h1 className="title">Create New Ticket</h1>
            </div>
            <div className="row">
                <div className="label">Project</div>
                <div className="input">
                    <TextInput value={props.projectID} setValue={props.setProjectID}/>
                </div>
            </div>
            <div className="row">
                <div className="label">Title</div>
                <div className="input">
                    <TextInput value={props.title} setValue={props.setTitle}/>
                </div>
            </div>
            <div className="row">
                <div className="label">Priority</div>
                <div className="input">
                    <Dropdown options={options} selectedOption={props.priority} onSelect={props.setPriority}/>
                </div>
            </div>
            <div className="row">
                <div className="label">Description</div>
                <div className="input">
                    <TextInput description value={props.description} setValue={props.setDescription}/>
                </div>
            </div>
            <div className="row">
                <div className="label">Complexity</div>
                <div className="input">
                    <TextInput value={props.complexity} setValue={props.setComplexity}/>
                </div>
            </div>
            <div className="row">
                <div className="label">Deadline</div>
                <div className="input">
                    <Date value={props.completionDate} setValue={props.setCompletionDate}/>
                </div>
            </div>
            <div className="row">
                <div className="label">Assignee</div>
                <div className="input">
                    <TextInput value={props.assignee} setValue={props.setAssignee}/>
                </div>
            </div> 
            <div className="buttons">
                <Button save text="Save" onClick={props.saveOnClick}/>
                <Button cancel text="Cancel" onClick={props.cancelOnClick}/>
            </div>   
        </div>
    );
}