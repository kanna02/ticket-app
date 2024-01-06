import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MyAccountPage from './pages/my-account/MyAccountPage';
import StartPage from './pages/start/StartPage';
import MyProjectsPage from "./pages/my-projects/MyProjectsPage";
import ProjectBoardPage from "./pages/project-board/ProjectBoardPage";

function App() {
  const [sharedData, setSharedData] = useState('');

  const updateSharedData = (newData) => {
    setSharedData(newData);
  };
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/start" element={<StartPage updateSharedData={updateSharedData}/>} />
        <Route path="/my-account" element={<MyAccountPage sharedData={sharedData} />} />
        <Route path="/my-projects" element={<MyProjectsPage/>} />
        <Route path="/project-board" element={<ProjectBoardPage/>} />
      </Routes>
    </div>
  );
}

export default App;
