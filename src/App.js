import logo from './assets/logo.svg'
import './App.css';
import { Button } from './components/button/Button';

function App() {
  // button js interaction
  const handleButtonClick = () => {
    alert('Button clicked!');
  };
  return (
    <div className="App">

    <Button/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header> */}
    </div>
  );
}

export default App;
