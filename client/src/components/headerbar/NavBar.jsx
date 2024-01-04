import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import "./NavBar.css"
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GoogleLogout } from '@react-oauth/google';

// import { GoogleLogout } from 'react-google-login';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const clientId = "975454066980-4g7e706rtl1ukvctquj9g5ubg3cbvgrq.apps.googleusercontent.com";


export const NavBar = () => {
    // const navigate = useNavigate();

    const location = useLocation();
    const currentPath = location.pathname;

    const onLogoutSuccess = () => {
        console.log("Log out successful!");
        localStorage.removeItem("user")
    };
  return (
     
<div className='navbar'>
    <h1 className='h1-navbar'>InfoTicket</h1>
    <div className="icon-container">
        <Link to="/my-projects" className={(currentPath === '/my-projects' || currentPath === '/my-projects/') ? 'active' : 'non-active'} >
            <FontAwesomeIcon icon={faFile} size='2x'  />
        </Link>
        <Link to="/my-account" className={currentPath === '/my-account' ? 'active' : 'non-active'}> 
            <FontAwesomeIcon icon={faUser} size='2x' />
        </Link>

        <Link to="/start" className='non-active' onClick={onLogoutSuccess}>
            <FontAwesomeIcon icon={faRightFromBracket} size='2x'/>
        </Link>
    </div>
</div>
 
  ) 
}