import { useEffect, useState } from 'react';
import dashboard from '../../assets/dashboard.png'
import google_icon from '../../assets/google_Icon.png'
import './StartPage.css';
import axios from 'axios';
import LoginButton from "../../components/login/login";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';


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
        <p className="Title"> Welcome to InfoTick.</p>
        <p className='Subtitle'>
          Efficiently manage your project <br/>
          tasks - individually or as part of a team.
        </p>
        <LoginButton/>
        {/* <GoogleOAuthProvider clientId='975454066980-4g7e706rtl1ukvctquj9g5ubg3cbvgrq.apps.googleusercontent.com'>
        <GoogleLogin
        onSuccess={(credentialResponse) =>{
          console.log(credentialResponse)
        }}
        onError={() => {
          console.log("Login failed")
        }}
        />
        
        </GoogleOAuthProvider> */}
        {/* <LoginButton/> */}
        {/* <div className='Google-Button'>
          <img src={google_icon} className="Google-Icon" alt="dashboard" />
          <p className='Google-Text'>Sign in with Google</p>         
        </div> */}
      </div>
      <div className='Image-Positioning'>
        <img src={dashboard} className="" alt="dashboard" />
      </div>
    </div>
  );
}

export default StartPage;
