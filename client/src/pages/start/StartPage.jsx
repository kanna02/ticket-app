import { useEffect, useState } from 'react';
import dashboard from '../../assets/dashboard.png'
import './StartPage.css';
import axios from 'axios';
import LoginButton from "../../components/login/login";

function StartPage() {

  const [users, setUsers] = useState([]);

  const baseURL = 'https://db-api-dot-task-master-409210.nw.r.appspot.com/api/get/users';

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
    });
  }, []);

  console.log(users);
  
  return (
    <div className="App">
      <div className='Left-Part'>
        <p className="Title"> Welcome to TaskMaster.</p>
        <br/><br/>
        <p className='Subtitle'>
          Efficiently manage your project <br/>
          tasks - individually or as part of a team.
        </p>
        <br/><br/>
        <div className='Google-Positioning'>
          <LoginButton className="Google-Button"/>
        </div>
      </div>
      <div className='Image-Positioning'>
        <img src={dashboard} className="" alt="dashboard" />
      </div>
    </div>
  );
}

export default StartPage;