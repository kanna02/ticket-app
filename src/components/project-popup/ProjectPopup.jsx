import React from "react";
import './ProjectPopup.css';
import { Button } from "../button/Button";
import { TextInput } from "../text-input/TextInput";

export function ProjectPopup(props) {

    return(
        <div className="popup">
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
                    <TextInput/>
                </div>
            </div>
            <div className="row">
                <div className="label">Deadline</div>
                <div className="input">
                    <input></input>
                </div>
            </div>
            <div className="row">
                <div className="label">Members</div>
                <div className="input">
                    <TextInput/>
                </div>
            </div> 
            <div className="buttons">
                <Button text="Save" onClick={props.cancelOnClick}/>
                <Button text="Cancel" onClick={props.cancelOnClick}/>
            </div>   
        </div>
    );
}
