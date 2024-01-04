import React from "react";
import { NavBar } from '../../components/headerbar/NavBar';
import { TextInput } from '../../components/text-input/TextInput';
import { Button } from '../../components/button/Button';
import './MyAccountPage.css';

function MyAccountPage(props) {
    // ... other logic

    return (
        <div className="my-account-page">
            <NavBar/>
            <div className="account-form">
                <h2 className="form-title">My Account</h2>
                <div className="form-row">
                    <TextInput label="First Name" name="firstName" placeholder="Enter your first name" />
                    <TextInput label="Last Name" name="lastName" placeholder="Enter your last name" />
                </div>
                <div className="form-row">
                    <TextInput label="ID" name="id" placeholder="Enter your ID" />
                    <TextInput label="Organisation" name="organisation" placeholder="Enter your organisation" />
                </div>
                <div className="form-row">
                    <TextInput label="Email" name="email" placeholder="Enter your email" />
                </div>
                <div className="form-buttons">
                    <Button save text="Save" onClick={() => {}} className="btn-save" />
                    <Button cancel text="Cancel" onClick={() => {}} className="btn-cancel" />
                </div>
            </div>
        </div>
    );
}
<div className="header-actions">
{/* <Button round onClick={handleAddProjectClick} />              */}
</div>
export default MyAccountPage;