import logo from './assets/logo.svg'
import './App.css';
import { Button } from './components/button/Button';
import { NavBar } from './components/headerbar/HeaderBar';
import { ProjectCard } from './components/project-card/ProjectCard';
import { TextInput } from './components/text-input/TextInput';
import { Dropdown } from './components/dropdown/Dropdown';

function App() {
  // button js interaction
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  const [selectedValue, setSelectedValue] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const dropdownOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];
  
  return (
    <div className="App">

    {/* <Dropdown
    label="Select an Option:"
        options={dropdownOptions}
        onChange={handleDropdownChange}
      /> */}

{/* Interaction Button */}
    <Button/>

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
