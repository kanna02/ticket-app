import { GoogleOAuthProvider, GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import '../../pages/start/StartPage.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import google_icon from '../../assets/google_Icon.png'



function Login(props) {
    const navigate = useNavigate();
 
    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! CURRENT user: ", res.profileObj);
        navigate("/my-projects");
    }
 
    const onFailure = (res) => {
        console.log("LOGIN FAILED! res:", res);
    }

    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    // const logOut = () => {
    //     googleLogout();
    //     setProfile(null);
    // };

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );
        
    console.log(profile.email);

    return (
        <div className='Google-Button' onClick={props.onClick}>
            <img src={google_icon} className="Google-Icon" alt="google-icon" />
            <p className='Google-Text'>Sign in with Google</p>      
        </div>
          
    );
}
 
export default Login;


   /* <GoogleLogin
                onSuccess={onSuccess}
                onFailure={onFailure}
                shape="pill"
                size="large"
                theme="outline"
            /> */
        // </GoogleOAuthProvider>  