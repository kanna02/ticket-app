import { useState, useEffect } from 'react';
import axios from 'axios'
import dashboard from '../../assets/dashboard.png'
import google_icon from '../../assets/google_Icon.png'
import './StartPage.css';

function StartPage() {

  const [users, setUsers] = useState([]);

  const baseURL = 'https://db-api-dot-task-master-409210.nw.r.appspot.com/api/get/users';

    useEffect(() => {
      axios.get(baseURL).then((response) => {
        // console.log(response.data)
        setUsers(response.data);
      });
    }, []);

    // if (!users) return null;


  console.log(users);



  return (
    <div className="App">
      <div className='Left-Part'>
        <p className="Title"> Welcome to InfoTick.</p>
        <p className='Subtitle'>
          Efficiently manage your project <br/>
          tasks - individually or as part of a team.
        </p>
        <div className='Google-Button'>
          <img src={google_icon} className="Google-Icon" alt="dashboard" />
          <p className='Google-Text'>Sign in with Google</p>         
        </div>
      </div>
      <div className='Image-Positioning'>
        <img src={dashboard} className="" alt="dashboard" />
      </div>
    </div>
  );
}

export default StartPage;
