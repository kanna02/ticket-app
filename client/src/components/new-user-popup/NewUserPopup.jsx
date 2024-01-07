import React from "react";
import './NewUserPopup.css';
import { Button } from "../button/Button";
import { TextInput } from "../text-input/TextInput";

export function NewUserPopup(props) {

    return(
        <div className="user-popup">
            <div className="title">
                <h1 className="title">Create New User Account</h1>
            </div>
            <div className="row">
                <div className="label">First Name</div>
                <div className="input">
                    <TextInput value={props.firstName} setValue={props.setFirstName}/>
                </div>
            </div>
            <div className="row">
                <div className="label">Last Name</div>
                <div className="input">
                    <TextInput value={props.lastName} setValue={props.setLastName}/>
                </div>
            </div>
            <div className="row">
                <div className="label">Type</div>
                <div className="input">
                <TextInput value={props.type} setValue={props.setType}/>
                </div>
            </div>
            <div className="row">
                <div className="label">Organisation</div>
                <div className="input">
                    <TextInput value={props.organisation} setValue={props.setOrganisation}/>
                </div>
            </div> 
            <div className="row">
                <div className="label">Email</div>
                <div className="input">
                    <TextInput value={props.email} setValue={props.setEmail}/>
                </div>
            </div> 
            <div className="buttons">
                <Button save text="Save" onClick={props.saveOnClick}/>
                <Button cancel text="Cancel" onClick={props.cancelOnClick}/>
            </div>   
        </div>
    );
}