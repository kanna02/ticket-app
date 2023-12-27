import React, { useState } from 'react';
import logo from './assets/logo.svg'
import './App.css';
import { Button } from './components/button/Button';
import IconPage, { NavBar } from './components/headerbar/HeaderBar';
import { ProjectCard } from './components/project-card/ProjectCard';

import projects from './projects';
import { TextInput } from './components/text-input/TextInput';
import { ProjectPopup } from './components/project-popup/ProjectPopup';
import { Dropdown } from './components/dropdown/Dropdown';
import { TicketCard } from './components/ticket-card/TicketCard';
import { StatusColumn } from './components/status-column/StatusColumn';

function App() {
  const [selectedOption, setSelectedOption] = useState('');

//options
  const dropdownOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },

  ];


  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // button js interaction
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <header className="App-header">

{/* Navbar */}
      {/* <NavBar/> */}
      </header>


      {/* Dropdown */}
      {/* <Dropdown 
        options={dropdownOptions} 
        onSelect={handleDropdownChange} 
        selectedOption={selectedOption} 
      /> */}

      {/* Button */}

      {/* <Button text="Save" onClick={handleButtonClick} /> */}
{/* Project card */}
{/* 
      <ProjectCard
        name={projects[0].name}
        projectDescription={projects[0].description}
        participants={projects[0].participants}
        completionDate={projects[0].completion}
      /> */}

      {/* <ProjectCard
        name={projects[0].name}
        tel={projects[0].phone}
        email={projects[0].email}
      /> */}

{/* Text Input */}

{/* <TextInput/> */}

{/* Project Popup */}
  {/* <ProjectPopup/> */}

  {/* Ticket card */}
{/* 
  <TicketCard
    title="Finish dashboard"
    id="1"
    priority="high"
    /> */}

    <StatusColumn/>

{/* No use */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  */}

    </div>
  );
}

export default App;
