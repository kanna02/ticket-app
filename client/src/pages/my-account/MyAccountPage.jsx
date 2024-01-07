import React, { useState, useEffect } from "react";
import { NavBar } from '../../components/navbar/NavBar';
import { TextInput } from '../../components/text-input/TextInput';
import { Button } from '../../components/button/Button';
import './MyAccountPage.css';
import axios from 'axios';

function MyAccountPage() {

    const [userList, setUserList] = useState(null);

    // Retrieve data from localStorage
    const storedData = JSON.parse(localStorage.getItem('myData'));

    // Retrieve user account data
    useEffect(() => {
            if (storedData.email) {   
                const baseURL = `https://db-api-dot-task-master-409210.nw.r.appspot.com/api/getUserFromEmail/${storedData.email}`;
                axios.get(baseURL).then((response) => {
                    setUserList(response.data);
                }).catch((error) => {
                    console.error("Error fetching user data:", error);
                });
            }
    }, [storedData.email]);

    if (userList) {
        const user = userList[0];

        return (
            <div className="my-account-page">
                <NavBar/>
                <div className="account-form">
                    <h2 className="form-title">My Account</h2>
                    <div className="form-row">
                        <TextInput label="First Name" name="firstName" placeholder={user.name || "Enter your first name"} />
                        <TextInput label="Last Name" name="lastName" placeholder={user.last_name ? user.last_name : "Enter your first name"} />
                    </div>
                    <div className="form-row">
                        <TextInput label="Member type" name="member_type" placeholder={user.type}/>
                        <TextInput label="Organisation" name="organisation" placeholder={user.organisation ? user.organisation : "Enter your organisation"} />
                    </div>
                    <div className="form-row">
                        <TextInput label="Email" name="email" placeholder={user.email} />
                        <TextInput disabled label="ID" name="id"  placeholder={user.user_id}/>
                    </div>
                    <div className="form-buttons">
                        <Button save text="Save" onClick={() => {}} className="btn-save" />
                        <Button cancel text="Cancel" onClick={() => {}} className="btn-cancel" />
                    </div>
                </div>
            </div>
        );
    }
}

export default MyAccountPage;