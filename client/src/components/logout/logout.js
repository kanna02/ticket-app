import { googleLogout } from '@react-oauth/google';
import { Button } from '../button/Button';
 
function Logout() {
 
    return (
        <div id="signOutButton">
            <Button onClick={googleLogout} text="Logout"/>
        </div>
    );
}
 
export default Logout;