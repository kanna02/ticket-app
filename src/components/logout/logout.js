import { GoogleLogout } from "react-google-login";

const clientId = "975454066980-4g7e706rtl1ukvctquj9g5ubg3cbvgrq.apps.googleusercontent.com";



function Logout(){
    const onSuccess = () =>{
        console.log("Log out succesfull!")
    }
    return(
        <div id="singOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
                />
        </div>
    )
}

export default Logout;