import React, { useState, useEffect } from "react";
import { NavBar } from '../../components/navbar/NavBar';
import { TextInput } from '../../components/text-input/TextInput';
import { Button } from '../../components/button/Button';
import './MyAccountPage.css';
import axios from 'axios';

function MyAccountPage(props) {

    const [userList, setUserList] = useState("");
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userType, setUserType] = useState("");
    const [userOrganisation, setUserOrganisation] = useState("");
    const [userEmail, setUserEmail] = useState("");

    // Retrieve data from localStorage
    const storedData = JSON.parse(localStorage.getItem('myData'));

    const getUserAccount = () => {
        const baseURL = `https://db-api-dot-task-master-409210.nw.r.appspot.com/api/getUserFromEmail/${storedData.email}`;
        axios.get(baseURL).then((response) => {
            setUserList(response.data);
        }).catch((error) => {
            console.error("Error fetching user data:", error);
        });
    }

    // Retrieve user account data
    useEffect( () => {
            if (storedData.email) {   
                getUserAccount();             
            }
    }, [storedData.email]);

    // clears input fields
    const handleCancel = () => {
        setUserFirstName("");
        setUserLastName("");
        setUserOrganisation("");
        setUserType("");
        setUserEmail("");
    }

    if (userList) {
        const user = userList[0];

        // update user account
        const updateUserAccount = () => {
            const baseURL = `https://db-api-dot-task-master-409210.nw.r.appspot.com/api/update/user/${user.user_id}`;
            const body = { 
                name: userFirstName != "" ? userFirstName : user.name,
                last_name: userLastName != "" ? userLastName : user.last_name,
                organisation: userOrganisation != "" ? userOrganisation : user.organisation,
                type: userType != "" ? userType : user.type,
                email: userEmail != "" ? userEmail : user.email
            }
            axios.put(baseURL,body).then((response) => {
                // console.log(response) // for debug
            }).catch((error) => {
                console.error("Error creating user data:", error);
            });
        }

        return (
            <div className="my-account-page">
                <NavBar/>
                <div className="account-form">
                    <h2 className="form-title">My Account</h2>
                    <div className="form-row">
                        <TextInput margin label="First Name" name="firstName" placeholder={user.name || "Enter your first name"} value={userFirstName} setValue={e => setUserFirstName(e.target.value)} />
                        <TextInput margin label="Last Name" name="lastName" placeholder={user.last_name ? user.last_name : "Enter your last name"} value={userLastName} setValue={e => setUserLastName(e.target.value)}/>
                    </div>
                    <div className="form-row">
                        <TextInput margin label="Member type" name="member_type" placeholder={user.type || "Enter your account type"} value={userType} setValue={e => setUserType(e.target.value)}/>
                        <TextInput margin label="Organisation" name="organisation" placeholder={user.organisation ? user.organisation : "Enter your organisation"} value={userOrganisation} setValue={e => setUserOrganisation(e.target.value)}/>
                    </div>
                    <div className="form-row">
                        <TextInput margin label="Email" name="email" placeholder={user.email} value={userEmail} setValue={e => setUserEmail(e.target.value)}/>
                        <TextInput margin disabled label="ID" name="id"  placeholder={user.user_id}/>
                    </div>
                    <div className="form-buttons">
                        <Button save text="Save" onClick={updateUserAccount} className="btn-save" />
                        <Button cancel text="Cancel" onClick={handleCancel} className="btn-cancel" />
                    </div>
                </div>
            </div>
        );
    }
}

export default MyAccountPage;