import { useEffect, useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import dashboard from '../../assets/dashboard.png'
import './StartPage.css';
import axios from 'axios';
import google_icon from '../../assets/google_Icon.png'
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button/Button';
import { NewUserPopup } from '../../components/new-user-popup/NewUserPopup';

function StartPage() {
  const clientId = "975454066980-4g7e706rtl1ukvctquj9g5ubg3cbvgrq.apps.googleusercontent.com"; //TODO: save to environment file

  const navigate = useNavigate();

  const [loginResponse, setLoginResponse ] = useState(null);
  const [loginProfile, setLoginProfile ] = useState(null);
  const [showPopup, setShowPopup ] = useState(false);

  const [userFirstName, setUserFirstName] = useState(null);
  const [userLastName, setUserLastName] = useState(null);
  const [userType, setUserType] = useState(null);
  const [userOrganisation, setUserOrganisation] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    if (loginResponse?.access_token) {
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${loginResponse.access_token}`, {
            headers: {
                Authorization: `Bearer ${loginResponse.access_token}`,
                Accept: 'application/json',
            },
        })
        .then((res) => {
            setLoginProfile(res.data);
        })
        .catch((err) => {
            console.log("Error fetching user data:", err); // Error log
        });
    }
  }, [loginResponse]);

  useEffect(() => {
    if (loginProfile) {
        const data = { email: loginProfile.email}
        localStorage.setItem('myData', JSON.stringify(data)); // Save data to localStorage
        navigate("/my-projects");
    }
  }, [loginProfile, navigate]);

  // create user account with new email
  const createUserAccount = () => {
    const baseURL = `https://db-api-dot-task-master-409210.nw.r.appspot.com/api/post/user`;
    const body = { 
        name: userFirstName,
        firstName: userLastName,
        organisation: userOrganisation,
        type: userType,
        email: userEmail
    }
    axios.post(baseURL,body).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.error("Error creating user data:", error);
    });
  }

  // google login
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setLoginResponse(codeResponse),
    onError: (error) => console.log('Login Failed:', error),
    clientId: clientId,
  });

  const handleSave = () => {
    createUserAccount();
    closePopup();
  }

  const openPopup = () => {
    setShowPopup(true);
  }

  const closePopup = () => {
    setShowPopup(false);
  }

  const handleLogin = () => {
    // console.log(loginProfile) 
    login();
  };

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
        <br/>
        <Button createAccount text="Dont, have an account? Create a User Account" onClick={openPopup}/>
      </div>
      <div className='Image-Positioning'>
        <img src={dashboard} className="" alt="dashboard" />
      </div>
      {showPopup && 
        <NewUserPopup 
          saveOnClick={handleSave} cancelOnClick={closePopup}
          firstName={userFirstName} setFirstName={e => setUserFirstName(e.target.value)}
          lastName={userLastName} setLastName={e => setUserLastName(e.target.value)}
          organisation={userOrganisation} setOrganisation={e => setUserOrganisation(e.target.value)}
          type={userType} setType={e => setUserType(e.target.value)}
          email={userEmail} setEmail={e => setUserEmail(e.target.value)}
        />
      }
    </div>
  );
}

export default StartPage;