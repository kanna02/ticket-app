import { GoogleLogin } from 'react-google-login'
import { useNavigate } from 'react-router-dom';

const clientId = "975454066980-4g7e706rtl1ukvctquj9g5ubg3cbvgrq.apps.googleusercontent.com"

function Login(){

    const navigate = useNavigate();
    const onSuccess = (res) =>{
        console.log("LOGIN SUCCESS! CURRENT user: ", res.profileObj);
        navigate("/my-account");
        
    }

    const onFailure = (res) =>{
        console.log("LOGIN FAILES! res:", res);
    }
    return(
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                />
        </div>
    )
}

export default Login;