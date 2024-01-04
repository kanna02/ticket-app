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
                <div className="label">Deadline</div>
                <div className="input">
                    <Date/>
                </div>
            </div>
            <div className="row">
                <div className="label">Members</div>
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