import { useEffect, useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import dashboard from '../../assets/dashboard.png'
import './StartPage.css';
import axios from 'axios';
import google_icon from '../../assets/google_Icon.png'
import { useNavigate } from 'react-router-dom';

function StartPage({updateSharedData}) {

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


    // get information about profile logged in
    useEffect(
      () => {
          if (loginResponse.access_token ) {
            console.log("useeffect")
              axios
                  .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${loginResponse.access_token}`, {
                      headers: {
                          Authorization: `Bearer ${loginResponse.access_token}`,
                          Accept: 'application/json'
                      }
                  })
                  .then((res) => {
                      setLoginProfile(res.data);
                      console.log("login-profile set")
                     
                  })
                  .catch((err) => console.log(err));
          }
      },
      [loginResponse]
  );

  

  // login, send email address to my-account, navigate to my-projects
  const handleLogin = async () => {
    await login();

    console.log(loginProfile);


    if (loginProfile.email) {
      console.log("inside if")
      const data = {
        email: loginProfile.email
      }
      updateSharedData(data);
      navigate("/my-projects");
    }
  }



    

 

  
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
        {/* <LoginButton onClcik={() => login()}/> */}
      </div>
      <div className='Image-Positioning'>
        <img src={dashboard} className="" alt="dashboard" />
      </div>
    </div>
  );
}

export default StartPage;