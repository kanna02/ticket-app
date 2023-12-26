import logo from './assets/logo.svg'
import './App.css';
import { Button } from './components/button/Button';
import { NavBar } from './components/headerbar/HeaderBar';
import { ProjectCard } from './components/project-card/ProjectCard';
import { TextInput } from './components/text-input/TextInput';

function App() {
  // button js interaction
  const handleButtonClick = () => {
    alert('Button clicked!');
  };
  return (
    <div className="App">

{/* Interaction Button */}
    {/* <Button/> */}

{/* HeaderBar */}
    {/* <NavBar/> */}

{/* Project card */}

    {/* <ProjectCard
        name={projects[0].name}
        projectDescription={projects[0].description}
        participants={projects[0].participants}
        completionDate={projects[0].completion}
      /> */}


{/* Text Input */}
      {/* <TextInput/> */}

    </div>
  );
}

export default App;
