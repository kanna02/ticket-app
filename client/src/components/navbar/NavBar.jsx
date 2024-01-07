import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFile, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import "./NavBar.css"
import { Link, useLocation } from 'react-router-dom';
import Tooltip from '../tooltip/Tooltip';

export const NavBar = () => {

    const location = useLocation();
    const currentPath = location.pathname;

    const onLogoutSuccess = () => {
        // console.log("Log out successful!"); //for debug
        localStorage.removeItem("user")
    };
  return (
     
<div className='navbar'>
    <h1 className='h1-navbar'>TaskMaster</h1>
    <div className="icon-container">
        <Tooltip text="My Projects">
            <Link to="/my-projects" className={(currentPath === '/my-projects' || currentPath === '/my-projects/') ? 'active' : 'non-active'} >
                <FontAwesomeIcon icon={faFile} size='2x'  />
            </Link>
        </Tooltip>
        <Tooltip text="My Account">
            <Link to="/my-account" className={currentPath === '/my-account' ? 'active' : 'non-active'}> 
                <FontAwesomeIcon icon={faUser} size='2x' />
            </Link>
        </Tooltip>
        <Tooltip text="Sign Out">
            <Link to="/start" className='non-active' onClick={onLogoutSuccess}>
                <FontAwesomeIcon icon={faRightFromBracket} size='2x'/>
            </Link>
        </Tooltip>
    </div>
</div>
 
  ) 
}