import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import "../../App.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NavBar = () => {
  return (
     
<div className='navbar'>
    <h1 className='h1-navbar'>InfoTicket</h1>
    <div className="icon-container">
        <a className='non-active' href='#'>
            <FontAwesomeIcon icon={faFile} size='2x'  />
        </a>
        <a className='non-active' href='#'>
            <FontAwesomeIcon icon={faUser} size='2x' />
        </a>
        <a className='non-active' href='#'>
            <FontAwesomeIcon icon={faRightFromBracket} size='2x'  />
        </a>

    </div>
</div>
 
  ) 
}
