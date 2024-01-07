import { useEffect, useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import dashboard from '../../assets/dashboard.png'
import './StartPage.css';
import axios from 'axios';
import google_icon from '../../assets/google_Icon.png'
import { useNavigate } from 'react-router-dom';

function StartPage() {
  const navigate = useNavigate();

  const [loginResponse, setLoginResponse ] = useState([]);
  const [loginProfile, setLoginProfile ] = useState([]);

  // google login
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setLoginResponse(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  // console.log(loginResponse.length);
  console.log(loginResponse);

  console.log(loginResponse.access_token ? "true" : "false");

  useEffect(() => {
    if (loginResponse?.access_token) {
        console.log("Access Token:", loginResponse.access_token); // Debug log
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${loginResponse.access_token}`, {
            headers: {
                Authorization: `Bearer ${loginResponse.access_token}`,
                Accept: 'application/json',
            },
        })
        .then((res) => {
            console.log("User Data:", res.data); // Debug log
            setLoginProfile(res.data);
        })
        .catch((err) => {
            console.log("Error fetching user data:", err); // Error log
        });
    }
  }, [loginResponse]);
 

  const handleLogin = () => {
    console.log(loginProfile)
      login();
  };

  useEffect(() => {
    if (loginProfile) {
        const data = { email: loginProfile.email}
        localStorage.setItem('myData', JSON.stringify(data)); // Save data to localStorage
        navigate("/my-projects", { state: { email: loginProfile.email } });
    }
  }, [loginProfile, navigate]);
 

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
        <div className='Google-Button' onClick={() => handleLogin()}>
            <img src={google_icon} className="Google-Icon" alt="google-icon" />
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