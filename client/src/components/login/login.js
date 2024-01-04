import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
 
const clientId = "975454066980-4g7e706rtl1ukvctquj9g5ubg3cbvgrq.apps.googleusercontent.com";
 
function Login() {
    const navigate = useNavigate();
 
    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! CURRENT user: ", res.profileObj);
        navigate("/my-projects");
    }
 
    const onFailure = (res) => {
        console.log("LOGIN FAILED! res:", res);
    }
 
    return (
<GoogleOAuthProvider clientId={clientId}>
<div id="signInButton">
<GoogleLogin
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    useOneTap
                />
</div>
</GoogleOAuthProvider>
    );
}
 
export default Login;