import React from "react";
import { Routes, Route } from "react-router-dom";
import MyAccountPage from './pages/my-account/MyAccountPage';
import StartPage from './pages/start/StartPage';
import MyProjectsPage from "./pages/my-projects/MyProjectsPage";
import ProjectBoardPage from "./pages/project-board/ProjectBoardPage";

function App() {
  
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
