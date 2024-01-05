import React from "react";
import './ProjectPopup.css';
import { Button } from "../button/Button";
import { TextInput } from "../text-input/TextInput";
import Date from "../date/Date";

export function ProjectPopup(props) {

    return(
        <div className="project-popup">
            <div className="title">
                <h1 className="title">Create New Project</h1>
            </div>
            <div className="row">
                <div className="label">Title</div>
                <div className="input">
                    <TextInput value={props.title} setValue={props.setTitle}/>
                </div>
            </div>
            <div className="row">
                <div className="label">Description</div>
                <div className="input">
                    <TextInput description value={props.description} setValue={props.setDescription}/>
                </div>
            </div>
            <div className="row">
                <div className="label">Deadline</div>
                <div className="input">
                    <Date value={props.completionDate} setValue={props.setCompletionDate}/>
                </div>
            </div>
            <div className="row">
                <div className="label">Members</div>
                <div className="input">
                    <TextInput value={props.members} setValue={props.setMembers}/>
                </div>
            </div> 
            <div className="buttons">
                <Button save text="Save" onClick={props.saveOnClick}/>
                <Button cancel text="Cancel" onClick={props.cancelOnClick}/>
            </div>   
        </div>
    );
}