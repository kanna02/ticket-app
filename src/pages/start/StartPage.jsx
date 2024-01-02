import dashboard from '../../assets/dashboard.png'
import google_icon from '../../assets/google_Icon.png'
import './StartPage.css';
// import LogoutButton from "./components/logout/logout"
import LoginButton from "../../components/login/login";
function StartPage() {
  
  return (
    <div className="App">
      <div className='Left-Part'>
        <p className="Title"> Welcome to InfoTick.</p>
        <p className='Subtitle'>
          Efficiently manage your project <br/>
          tasks - individually or as part of a team.
        </p>
        <LoginButton/>
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
