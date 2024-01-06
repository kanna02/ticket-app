import React, { useState, useEffect } from "react";
import { NavBar } from '../../components/navbar/NavBar';
import { TextInput } from '../../components/text-input/TextInput';
import { Button } from '../../components/button/Button';
import './MyAccountPage.css';
import axios from 'axios';

import { useLocation } from 'react-router-dom';
function MyAccountPage({sharedData}) {
    // ... other logic
    // get email from Start-Page
    const location = useLocation();
    const [user, setUser] = useState(null);
    console.log("first")

    useEffect(() => {
        if (sharedData) {   
            const baseURL = `https://db-api-dot-task-master-409210.nw.r.appspot.com/api/getUserFromEmail/${sharedData}`;
            axios.get(baseURL).then((response) => {
                console.log("second")
                setUser(response.data);
                console.log(sharedData)
            }).catch((error) => {
                console.error("Error fetching user data:", error);
            });
        }
    }, [sharedData]);

    console.log(sharedData)
    // const User = user[0]
    console.log("user++" +user)

    return (
        <div className="my-account-page">
            <NavBar/>
            <div className="account-form">
                <h2 className="form-title">My Account</h2>
                <div className="form-row">
                    <TextInput label="First Name" name="firstName" placeholder={user[0].name || "Enter your first name"} />
                    <TextInput label="Last Name" name="lastName" placeholder={user[0].last_name ? user[0].last_name : "Enter your first name"} />
                </div>
                <div className="form-row">
                    <TextInput label="Member type" name="member_type" placeholder={user[0].type}/>
                    <TextInput label="Organisation" name="organisation" placeholder={user[0].organisation ? user[0].organisation : "Enter your organisation"} />
                </div>
                <div className="form-row">
                    <TextInput label="Email" name="email" placeholder={user[0].email} />
                    <TextInput label="ID" name="id"  placeholder={user[0].user_id}/>
                </div>
                <div className="form-buttons">
                    <Button save text="Save" onClick={() => {}} className="btn-save" />
                    <Button cancel text="Cancel" onClick={() => {}} className="btn-cancel" />
                </div>
            </div>
        </div>
    );
}


export default MyAccountPage;