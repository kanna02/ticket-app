import logo from './assets/logo.svg'
import './App.css';
import { Button } from './components/button/Button';
import IconPage, { NavBar } from './components/headerbar/HeaderBar';
import { ProjectCard } from './components/project-card/ProjectCard';

import projects from './projects';
import { TextInput } from './components/text-input/TextInput';
import { ProjectPopup } from './components/project-popup/ProjectPopup';

function App() {
// button js interaction
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <header className="App-header">

{/* Button */}

      {/* <Button text="Save" onClick={handleButtonClick} /> */}


      
{/* Navbar */}
      {/* <NavBar/> */}

{/* Project card */}

      {/* <ProjectCard
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
      </header>
            <Button text="Save" onClick={handleButtonClick} />
    </div>
  );
}

export default App;
