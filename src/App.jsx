import React from "react";
import { Routes, Route } from "react-router-dom";
import MyAccountPage from './pages/my-account/MyAccountPage';
import StartPage from './pages/start/StartPage';
import MyProjectsPage from "./pages/my-projects/MyProjectsPage";
import ProjectBoardPage from "./pages/project-board/ProjectBoardPage";

import LogoutButton from "./components/logout/logout"
import LoginButton from "./components/login/login";
import { useEffect } from "react";
import { gapi } from "gapi-script";

const clientId = "975454066980-4g7e706rtl1ukvctquj9g5ubg3cbvgrq.apps.googleusercontent.com"

function App() {

  useEffect(() =>{
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);
  });
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/start" element={<StartPage />} />
        <Route path="/my-account" element={<MyAccountPage/>} />
        <Route path="/my-projects" element={<MyProjectsPage/>} />
        <Route path="/project-board" element={<ProjectBoardPage/>} />
      </Routes>
    </div>
  );
}

export default App;
