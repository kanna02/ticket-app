import { googleLogout } from '@react-oauth/google';
 
function Logout() {
    const onSuccess = () => {
        console.log("Log out successful!");
    };
 
    const handleLogout = () => {
        googleLogout();
        onSuccess();
    };
 
    return (
<div id="signOutButton">
<button onClick={handleLogout}>Logout</button>
</div>
    );
}
 
export default Logout;